import React from "react";

export const MyImage = (props) => {
	return (
		<img className="myImage"
			src={"https://mimo.app/i/" + props.name + ".png"}
			alt={props.name}
		/>
	);
}
