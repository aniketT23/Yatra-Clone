/** @format */

import "./App.css";
import Navbar from "./components/NavBar";
import Flight from "./components/Flight";
import Train from "./components/Train";
import Side from "./components/Side";
import Book from "./components/Book";
import { Route, Switch } from "react-router";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Switch>
				<Route path='/' exact>
					<div
						style={{
							width: "450px",
							marginTop: "100px",
							float: "left",
							position: "fixed",
						}}>
						<Flight></Flight>
						{/* <Train></Train> */}
					</div>
					<Side style={{ width: "77%", float: "left" }}></Side>
					{/* <Book></Book> */}
				</Route>
				<Route path='/trains' exact>
					<div
						style={{
							width: "450px",
							marginTop: "100px",
							float: "left",
							position: "fixed",
						}}>
						<Train></Train>
					</div>
					<Side style={{ width: "77%", float: "left" }}></Side>
					{/* <Book></Book> */}
				</Route>
				<Route path='/book'>
					<Book></Book>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
