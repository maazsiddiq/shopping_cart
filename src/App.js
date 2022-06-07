import React from "react";
import "./App.css";
import Layout from "./layout/index.jsx";

import { routes } from "./config/routes";

import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./config/MuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Layout>
					{routes.map((route) => {
						return (
							<Route
								key={route.path}
								exact
								path={route.path}
								component={route.component}
							/>
						);
					})}
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
