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
			<div className="favoriteQuote _block">
				<div className="favoriteQuote__container _container">
					<h2 className="favoriteQuote__subtitle subtitle">FavoriteQuote</h2>
					<form className="favoriteQuote__form">
						<div className="favoriteQuote__item">

							<h3 className="label"> My Favorite Quote: </h3>
							<p className="favoriteQuote__text" >{this.state.favoriteQuote} </p>
							<input className=" favoriteQuote__input _input"
								id="quoteInput"
								type="text"
								placeholder="Typeth thy quote here..."
								onChange={this.handleFavoriteQuoteInput}
							/>
						</div>

						<div className="favoriteQuote__item">

							<h3 className="label"> This comes from the book /    story called: </h3>
							<p className="favoriteQuote__text" > {this.state.book} </p>
							<input className="favoriteQuote__input _input"
								id="bookInput"
								type="text"
								placeholder="Where did it come from?"
								onChange={this.handleBookInput}
							/>
						</div>

					</form>
				</div>
			</div>
		);
	}
}

