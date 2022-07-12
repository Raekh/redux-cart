import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
// redux stuff
import { Provider } from "react-redux";
//
import store from './store';
//



function App() {
	// cart setup

	return (
		<React.StrictMode>
			<Provider store={store}>
				<main>
					<Navbar />
					<CartContainer />
				</main>
			</Provider>
		</React.StrictMode>
	);
}

export default App;
