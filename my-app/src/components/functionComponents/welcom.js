
import React from 'react';
import { MyImage } from './myImage';

function Welcom() {
	return (
		<div className="greeting _block">
			<div className="greeting__container _container">
				<h2 className="subtitle">Welcom</h2>
				<div className="scoreboard__content">
					<MyImage
						name="backpack"
					/>
					<MyImage
						name="eiffel"
					/>
				</div>
			</div>
		</div>
	);
}

export default Welcom;


//npm start - запуск

