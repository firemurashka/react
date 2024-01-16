import React from "react";
import AgeGroup from '../components/classComponents/ageGroup';
import MyVideoPlayer from '../components/classComponents/myVideoPlayer';
import Scoreboard from '../components/classComponents/scoreboard';
import Basket from '../components/classComponents/basket';
import FavoriteQuote from '../components/classComponents/favoriteQuote';
import CarBrands from '../components/classComponents/carBrands';
import Count from '../components/classComponents/count';
import CountDown from '../components/classComponents/countDown';

const ClassPage = () => {
	return (
		<main class="page">
			<div className="classComponent">
				<div className="classComponent__container _container">

					<div>
						<h1 className="title">Классовый компонент</h1>
						<AgeGroup />
						<MyVideoPlayer
							title="The Matrices: A Review"
							author="ChrisReviews"
							thumbnail="https://mimo.app/i/chris.png"
							datePublished="04/09/2022"
							views={142930}
						/>
						<Scoreboard />
						<Basket />
						<FavoriteQuote />

						<CarBrands />
						<Count />
						<CountDown />
					</div>
				</div>
			</div>



		</main>
	);
}

export default ClassPage;