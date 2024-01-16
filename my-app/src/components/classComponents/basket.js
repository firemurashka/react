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
				<div className="basket _block">
					<div className="basket__container _container">
						<div className="basket__content">
							<h2 className="basket__subtitle subtitle">Basket</h2>
							<ul id="fruits" className="basket__list _list">
								{this.state.fruitBasket.map((fruit, i) => {
									return (
										<li key={"fruit" + i}> {fruit} </li>
									);
								})}
							</ul>
							<button className="button" id="add_more" onClick={() =>
								this.updateFruit("strawberries")
							}
							>
								Add More Strawberries!
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
