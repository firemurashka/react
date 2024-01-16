import React from "react";


export default class AgeGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "(No email entered)",
			ageGroup: "(No age group selected)"
		};
	}


	handleEmailEntry = (e) => {
		this.setState({ email: e.target.value })
	}


	handleAgeEntry = (e) => {
		this.setState({ ageGroup: e.target.value });
	}


	render() {
		return (
			<div className="ageGroup _block">
				<div className="ageGroup__container _container">
					<h2 className="ageGroup__subtitle subtitle">AgeGroup</h2>
					<form className="ageGroup__form">
						<div className="ageGroup__item">
							<h3 className="label"> Survey: </h3>
							<div className="ageGroup__survey">

								<input className="ageGroup__input _input"
									id="emailInput" type="email" placeholder="Your email..."
									onChange={this.handleEmailEntry}
								/>
								<select className="ageGroup__select _select"
									id="ageInput"
									onChange={this.handleAgeEntry}
								>
									<option value="No age group" >    Your age... </option>
									<option value="<18" >    Younger than 18 </option>
									<option value="18-24" > 18 -    24 </option>
									<option value="25-29" > 25 -    29 </option>
									<option value="30+" >    30 or older </option>
								</select>
							</div>
						</div>
						<div className="ageGroup__item">
							<h3 className="label" > Your submitted responses: </h3>
							<ul className="ageGroup__list _list">
								<li id="emailEntry" > {this.state.email} </li>
								<li id="ageEntry" > {this.state.ageGroup} </li>
							</ul>
						</div>

					</form>
				</div>
			</div>
		);
	}
}

