import React from 'react';
import CustomButton from '../functionComponents/buttons';

class CountDown extends React.Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	countDown = () => {
		this.setState({
			count: this.state.count - 1
		});
	}
	//Метод обновления - updateCount 
	countUp = () => {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div className="countDown _block">
				<div className="countDown__container _container">
					<h2 className="countDown__subtitle subtitle">CountDown</h2>
					<h3 className="label">Welcom to my App</h3>
					<p>I've been clicked {this.state.count} times</p>
					<div className="countDown__content">
						<CustomButton handleClick={this.countUp} text="Count Up" />
						<CustomButton handleClick={this.countDown} text="Count Down" />
						{/* this.state - это объект JavaScript , который позволяет отслеживать и использовать несколько значений,this.state.count внутри render() и отображение его текущего значения  */}
					</div>
				</div>
			</div>
		);
	}
}

export default CountDown;


//npm start - запуск

