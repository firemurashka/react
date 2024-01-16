
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
		<div className="header__container _container">
			<nav className="header__nav">
				<Link to="/home">Главная</Link>
				<Link to="/class">Классовый компонент</Link>
				<Link to="/functional">Функциональный компонент</Link>
				<Link to="/hooks">Хуки</Link>
			</nav>
		</div>
		</div>
	);
}

export default Header;


