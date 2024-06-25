import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/landingPage";
import Background from "./lib/background/components/background";
import WelcomeScreen from "./components/welcomeScreen";

function App() {
	return (
		<>
			<Background />
			<WelcomeScreen />
			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
