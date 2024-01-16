import React, { useState } from "react";

const ClickCount = () => {
	const [count, updateCount] = useState(0);
	const handleClick = () => {
		updateCount(count + 1);
	}

	return (
		<div className="clickCount _block">
			<div className="clickCount__container _container">
				<h2 className="clickCount__subtitle subtitle">ClickCount</h2>
				<div className="clickCount__content">
					<h3 className="label">I'm a functional component with an attitude!</h3>

					<p className="trademark">You've clicked on the botton {count} time(s)</p>

					<button className="button" onClick={handleClick}>Click me!"</button>
				</div>
			</div>
		</div>
	);
}
export default ClickCount;
