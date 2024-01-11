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
			<form className="form">
				<h1 > Survey: </h1>
				<input
					id="emailInput" type="email" placeholder="Your email..."
					onChange={this.handleEmailEntry}
				/>
				<select
					id="ageInput"
					onChange={this.handleAgeEntry}
				>
					<option value="No age group" >    Your age... </option>
					<option value="<18" >    Younger than 18 </option>
					<option value="18-24" > 18 -    24 </option>
					<option value="25-29" > 25 -    29 </option>
					<option value="30+" >    30 or older </option>
				</select>
				<h3 > Your submitted responses: </h3>
				<ul >
					<li id="emailEntry" > {this.state.email} </li>
					<li id="ageEntry" > {this.state.ageGroup} </li>
				</ul>
			</form>
		);
	}
}

