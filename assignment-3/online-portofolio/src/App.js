import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./constant";
import PageLayout from "./components/PageLayout";

class App extends Component {
	render() {
		return (
			<PageLayout>
				<Routes>
					{routeList.map((route) => (
						<Route
							key={route.name}
							path={route.url}
							element={route.component}
						/>
					))}
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</PageLayout>
		);
	}
}

export default App;
