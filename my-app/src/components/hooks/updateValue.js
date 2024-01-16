import React, { useState, useEffect } from "react";

const UpdateValue = () => {
	const [value, updateValue] = useState(0);
	const [multiplication, setMultiplication] = useState(0);
	const [division, setDivision] = useState(0);

	useEffect(() => {
		setMultiplication(value * 3);
	}, [value]); // Добавлен массив зависимостей
	useEffect(() => {
		setDivision(value / 3);
	}, [value]); // Добавлен массив зависимостей

	return (
		<div className="updateValue _block">
			<div className="updateValue__container _container">
				<h2 className="updateValue__subtitle subtitle">UpdateValue</h2>
				<div className="updateValue__content">
					<h3 className="label">Умножение на 3</h3>
					<p>Ответ: {multiplication}!</p>
					<h3 className="label">Деление на 3</h3>
					<p>Ответ: {division}!</p>
					<p>Число для умножения:</p>
					<input
						className="updateValue__input _input"
						type="number"
						value={value}
						onChange={(e) => {
							updateValue(Number(e.target.value)); // Приведение значения к числу
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default UpdateValue;
