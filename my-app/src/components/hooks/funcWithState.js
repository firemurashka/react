import React, { useState } from "react";

const FuncWithState = () => {
	const [textValue, textUpdate] = useState("");

	return (
		<div className="funcWithState _block">
			<div className="funcWithState__container _container">
				<h2 className="funcWithState__subtitle subtitle">FuncWithState</h2>
				<div className="funcWithState__content">
					<h3 className="label">An Example…</h3>
					<label for="name">What's your name?</label>
					<input
						className="_input"
						id="name"
						type="text"
						value={textValue}
						onChange={(e) => {
							textUpdate(e.target.value)
						}}
						placeholder="ex. John Doe"
					/>
					<p className="trademark">Powered by React Hooks.</p>
				</div>
			</div>
		</div>
	);
}
export default FuncWithState;
