import React, { useEffect, useState } from "react";

const SetMessage = () => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		setTimeout(() => {
			let setTo = message.length > 0 ? "" : "Get your copy here!"
			setMessage(setTo);
		}, 500)
	})


	return (
		<div className="setMessage _block">
			<div className="setMessage__container _container">
				<h2 className="setMessage__subtitle subtitle">SetMessage</h2>
				<div className="setMessage__content">
					<h3 className="label">New sale!</h3>
					<p>{message} </p>
				</div>
			</div>
		</div>
	);
}
export default SetMessage;
