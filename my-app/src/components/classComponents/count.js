import React from 'react';

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	//componentDidMount() - это функция для конкретного компонента, которая вызывается после загрузки компонента, для изменения значения объекта state 
	componentDidMount() {
		this.setState(
			//Обновление значения
			{ count: 1 }
		);
	}
	//Метод обновления - updateCount 
	updateCount = () => {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div className="count _block">
				<div className="count__container _container">
					<h2 className="count__subtitle subtitle">Count</h2>
					<h3 className="label">Hello</h3>
					{/* Связываем кнопку с методом */}
					<button onClick={this.updateCount} className="button">Click me</button>
					{/* this.state - это объект JavaScript , который позволяет отслеживать и использовать несколько значений,this.state.count внутри render() и отображение его текущего значения  */}
					<p>Count: {this.state.count}</p>
				</div>
			</div>
		);
	}
}

export default Count;


//npm start - запуск

