import React from "react";

export const CustomButton = (props) => {
	return (
		<button
			onClick={props.hahdleClick}
		>
			(props.text)
		</button>
	)
}