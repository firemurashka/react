import React from 'react';


import Header from './components/header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassPage from "./pages/ClassPage";
import FunctionalPage from "./pages/FunctionalPage";
import HooksPage from "./pages/HooksPage";
import Home from "./pages/Home";


function App() {
	return (
			<Router>
				<Header />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/class" element={<ClassPage />} />
					<Route path="/functional" element={<FunctionalPage />} />
					<Route path="/hooks" element={<HooksPage />} />
				</Routes>

				<footer class="footer">
					<div class="footer__bottom bottom-footer">
						<div class="bottom-footer__container">
							<div class="bottom-footer__body">
								<div class="bottom-footer__item">Все права защищены</div>
								<div class="bottom-footer__item">Не является публичной афертой</div>
								<div class="bottom-footer__item">
									<script>
										document.write(new Date().getFullYear())
									</script>2024
									<span>г</span>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</Router>

	);
}

export default App;


//npm start - запуск

