import React from "react";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./sass/App.scss";

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/news">
						<News />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	);
}

export default App;
