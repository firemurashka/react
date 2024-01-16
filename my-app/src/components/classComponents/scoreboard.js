import React from "react";

export default class Scoreboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			hint: "No hints"
		};
	}

	componentDidMount() {
		this.setState({
			score: 9,
			hint: "Try jump more"

		});
	}

	render() {
		return (
				<div className="scoreboard _block">
					<div className="scoreboard__container _container">
						<h2 className="scoreboard__subtitle subtitle"> Scoreboard</h2>
						<h3> Score: {this.state.score} </h3>
						<p> {this.state.hint} </p>
					</div>
				</div>
		);
	}
}
