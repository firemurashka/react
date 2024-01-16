import React, { useEffect, useState } from "react";

const TimeoutCount = () => {
	const [count, updateCount] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			updateCount(count + 1);
		}, 1000);
	})

	return (
		<div className="timeoutCount _block">
			<div className="timeoutCount__container _container">
				<h2 className="timeoutCount__subtitle subtitle">TimeoutCount</h2>
				<div className="timeoutCount__content">
					<h3 className="label">Click Counter</h3>
					<p className="trademark">I've been rendered {count} time(s)</p>
				</div>
			</div>
		</div>
	);
}
export default TimeoutCount;
