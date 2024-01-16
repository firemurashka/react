import React, { useState, useEffect } from "react";

const Multiplication = () => {
	const [first, setFirst] = useState("");
	const [second, setSecond] = useState("");
	const [multiplication, setMultiplication] = useState(null);

	useEffect(() => {
		// В этой реализации при каждом изменении `first` или `second`
		// происходит пересчет результата умножения.
		setMultiplication(first * second);
	}, [first, second]); // Исправленный массив зависимостей

	return (
		<div className="multiplication _block">
			<div className="multiplication__container _container">
				<h2 className="multiplication__subtitle subtitle">Умножение</h2>
				<div className="multiplication__content">
					<h3 className="label">Умножить</h3>
					<p>Ответ: {multiplication}!</p>

					<p>Числа для умножения:</p>
					<input
						className="multiplication__input _input"
						type="number"
						value={first}
						onChange={(e) => {
							setFirst(e.target.value === "" ? "" : Number(e.target.value));
							// Убран вызов setMultiplication(null);
						}}
					/>
					<input
						className="multiplication__input _input"
						type="number"
						value={second}
						onChange={(e) => {
							setSecond(e.target.value === "" ? "" : Number(e.target.value));
							// Убран вызов setMultiplication(null);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Multiplication;
