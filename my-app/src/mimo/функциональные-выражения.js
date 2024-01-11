//функциональный компонент(как стрелочная функция)
//добавляем props для доступа к значениям передаваемым через атрибут в JSX
const NameApp = (props) => {
	//получаем доступ к атрубуту name - props.name
	const name = props.name;
	const location = props.location;
	const passed = props.passed;

	return (
		<div>
			<h1>Hello, {name}</h1>
			<p>Your current location is: {location}</p>
			<p>Has a diploma: {String(passed)}</p>
		</div>
	);
}

const graduated = true;

{/* отображение функционального компонента <NameApp /> */}
		{/* передаем атрибут name в JSX*/}
		<NameApp name="Sarah Smith" location="LA, California" passed={graduated} />