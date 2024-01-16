import React, { useState } from "react";

const UserName = () => {
	const [userName, updateUsername] = useState("");

	return (
		<div className="userName _block">
			<div className="userName__container _container">
				<h2 className="userName__subtitle subtitle">UserName</h2>
				<div className="userName__content">
					<h3 className="label">Enter a username</h3>
					<p className="trademark">Please, let me know the username you wish to use:</p>
					<input
						className="_input"
						type="text"
						value={userName}
						onChange={(e) => {
							updateUsername(e.target.value)
						}}
						placeholder="ex. John Doe"
					/>
				</div>
			</div>
		</div>
	);
}
export default UserName;
