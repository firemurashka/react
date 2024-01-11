import React from "react";

export default class Basket extends React.Component {
	constructor() {
		super();
		this.state = {
			fruitBasket: ["apple", "oranges", "bananas"]
		};
	}

	updateFruit = (newFruit) => {
		this.setState(prevState => ({
			fruitBasket: prevState.fruitBasket.concat(newFruit)
		}));
	}

	render() {
		return (
			<div>
				<ul id="fruits">
					{this.state.fruitBasket.map((fruit, i) => {
						return (
							<li key={"fruit" + i}> {fruit} </li>
						);
					})}
				</ul>
				<button id="add_more" onClick={() =>
					this.updateFruit("strawberries")
				}
				>
					Add More Strawberries!
				</button>
			</div>
		);
	}
}
