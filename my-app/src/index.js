import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Gallery from './components/Gallery';
import MyVideoPlayer from './components/myVideoPlayer';
import Scoreboard from './components/scoreboard';
import Basket from './components/basket';
import FavoriteQuote from './components/favoriteQuote';
import AgeGroup from './components/ageGroup';
import Welcom from './components/welcom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Welcom />
		< MyVideoPlayer
			title="The Matrices: A Review"
			author="ChrisReviews"
			thumbnail="https://mimo.app/i/chris.png"
			datePublished="04/09/2022"
			views={142930}
		/>
		< Scoreboard />
		<Basket />
		<FavoriteQuote />
		<AgeGroup />
		<Gallery />

	</React.StrictMode>

);

reportWebVitals();

//npm start - запуск-----------


