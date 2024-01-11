//import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
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
			<div className="App">
				<div>
					<h1 className="title">Hello</h1>
					{/* Связываем кнопку с методом */}
					<button onClick={this.updateCount} className="button">Click me</button>
					{/* this.state - это объект JavaScript , который позволяет отслеживать и использовать несколько значений,this.state.count внутри render() и отображение его текущего значения  */}
					<p className="text">Count: {this.state.count}</p>
				</div>
			</div>
		);
	}
}

export default App;


//npm start - запуск

