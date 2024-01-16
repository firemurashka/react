import React from "react";
import Welcom from '../components/functionComponents/welcom';
import NameApp from '../components/functionComponents/nameApp';
import CustomButton from '../components/functionComponents/buttons';

import Gallery from '../components/functionComponents/Gallery';
import Kg from '../components/functionComponents/kg';
const FunctionalPage = () => {
	return (
		<main class="page">
			<div className="functionComponents">
				<div className="functionComponents__container _container">
					<div>
						<h1 className="title">Функциональный компонент</h1>
						<Welcom />
						<NameApp
							name="Sarah Smith"
							location="LA, California"
							passed="true"
						/>
						<Gallery />
						<Kg />
						<CustomButton
							text="Log In" />
					</div>
				</div>
			</div>
		</main >

	);
}

export default FunctionalPage;