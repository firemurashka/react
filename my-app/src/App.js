import logo from './logo.svg';
import './App.css';

const footer = (
	<h2>
		Hello, Lori Smith
	</h2>
);

const header = (<header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<p>Hello, John</p>
	<a
		className="App-link"
		href="https://reactjs.org"
		target="_blank"
		rel="noopener noreferrer"
	>
		Learn React
	</a>
</header>);

const name = "Viktory";

function App() {
	return (
		<div className="App">


			{header}
			<div className="block">
				My first JSX {name}
			</div>
			{footer}


			
		</div>
	);
}

export default App;

//npm start - запуск