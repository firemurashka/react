import React from "react";

export default class FavoriteQuote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			favoriteQuote: "",
			book: ""
		};
	}

	handleFavoriteQuoteInput = (e) => {
		this.setState({ favoriteQuote: e.target.value })
	}

	handleBookInput = (e) => {
		this.setState({ book: e.target.value });
	}

	render() {
		return (
			<form >
				<h1 className="subtitle"> My Favorite Quote: </h1>
				<p className="quote" >{this.state.favoriteQuote} </p>
				<input
					id="quoteInput"
					type="text"
					placeholder="Typeth thy quote here..."
					onChange={this.handleFavoriteQuoteInput}
				/>
				<hr />
				<h3> This comes from the book /    story called: </h3>
				<p className="book" > {this.state.book} </p>
				<input
					id="bookInput"
					type="text"
					placeholder="Where did it come from?"
					onChange={this.handleBookInput}
				/>
			</form>
		);
	}
}

