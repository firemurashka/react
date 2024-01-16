import React from "react";

//функциональный компонент(как стрелочная функция)
//добавляем props для доступа к значениям передаваемым через атрибут в JSX
const NameApp = (props) => {
	//получаем доступ к атрубуту name - props.name
	const name = props.name;
	const location = props.location;
	const passed = props.passed;

	return (
		<div className="nameApp _block">
			<div className="nameApp__container _container">
				<h2 className="subtitle">NameApp</h2>
				<h1>Hello, {name}</h1>
				<p>Your current location is: {location}</p>
				<p>Has a diploma: {passed}</p>
			</div>
		</div>
	);
}

export default NameApp;