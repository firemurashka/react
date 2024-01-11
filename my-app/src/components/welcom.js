
import React from 'react';
import { MyImage } from './myImage';

function Welcom() {
	return (
		<div>
			<div>
				<h1
					className="title">Welcom to my App</h1>
				<MyImage
					name="backpack"
				/>
				<MyImage
					name="eiffel"
				/>
			</div>
		</div>
	);
}

export default Welcom;


//npm start - запуск

