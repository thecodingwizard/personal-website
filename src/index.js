import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import ReactModal from "react-modal";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactModal.setAppElement("#root");

const breakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

const theme = {
	breakpoints: {
		...breakpoints,
		down(key) {
			return `@media (max-width: ${breakpoints[key]}px)`
		},
		up(key) {
			return `@media (min-width: ${breakpoints[key]}px)`
		}
	}
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById("root")
);
registerServiceWorker();
