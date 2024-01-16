import React from "react";


class CarBrands extends React.Component {
	constructor(props) {
		super(props);
		this.state = { makes: ["Volkswagen", "Ford", "Honda"] }
	}


	render() {
		return (
			<div >
				<div className="carBrands _block">
					<div className="carBrands__container _container">
					<h2 className="carBrands__subtitle subtitle">CarBrands</h2>

					<ul className="carBrands__list _list" >
						{this.state.makes.map((make, i) => {
							return (<li key={"make-" + i} > {make} </li>)
						})}
					</ul>
				</div>
			</div>
			</div >
		)
	}
}


export default CarBrands;