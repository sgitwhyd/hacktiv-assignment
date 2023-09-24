import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./constant";
import PageLayout from "./components/PageLayout";
import NotFoundPage from "./pages/NotFoundPage";

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
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</PageLayout>
		);
	}
}

export default App;
