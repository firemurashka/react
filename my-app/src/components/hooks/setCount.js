import React, { useEffect, useState } from "react";

const SetCount = () => {
	const [count, setCount] = useState(1);

	useEffect(() => {
		if (count % 3 === 0) {
			setCount(currentCount => currentCount + 1);
		}
	}, [count]); // Добавлен массив зависимостей, чтобы исключить бесконечный цикл

	return (
		<div className="setCount _block">
			<div className="setCount__container _container">
				<h2 className="setCount__subtitle subtitle">SetCount</h2>
				<div className="setCount__content">
					<h3 className="label">Number Counter</h3>
					<p className="trademark">Counts: {count}</p>
					<button className="button" onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
				</div>
			</div>
		</div>
	);
}

export default SetCount;
