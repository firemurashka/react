import React from "react";
import FuncWithState from '../components/hooks/funcWithState';
import ClickCount from '../components/hooks/clickCount';
import UserName from '../components/hooks/userName';
/* import SetMessage from '../components/hooks/setMessage'; */
import UpdateValue from '../components/hooks/updateValue';
import TimeoutCount from '../components/hooks/timeoutCount';
import Multiplication from '../components/hooks/multiplication';
import SetCount from '../components/hooks/setCount';

const HooksPage = () => {
	return (
		<main class="page">
			<div className="hooke">
				<div className="hooke__container _container">
					<div>
						<h1 className="title">Хуки</h1>
						<FuncWithState />
						<ClickCount />
						<UserName />
						{/* <SetMessage /> */}
						<UpdateValue />
						<TimeoutCount  />
						<Multiplication  />
						<SetCount  />

					</div>
				</div>
			</div>


		</main>

	);
}

export default HooksPage;
