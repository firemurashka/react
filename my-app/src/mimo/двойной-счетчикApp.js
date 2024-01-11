//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { CustomButton } from './buttons';
import { MyImage } from './myImage';

class App extends React.Component {
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
			<div className="App">
				<div>
					<h1 className="title">Welcom to my App</h1>
					<p className="text">I've been clicked {this.state.count} times</p>

					<CustomButton handleClick={this.countUp} text="Count Up" />
					<CustomButton handleClick={this.countDown} text="Count Down" />
					{/* this.state - это объект JavaScript , который позволяет отслеживать и использовать несколько значений,this.state.count внутри render() и отображение его текущего значения  */}
				</div>
			</div>
		);
	}
}

export default App;


//npm start - запуск

