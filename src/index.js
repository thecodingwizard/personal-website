import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

const theme = {
	breakpoints: {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	}
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
registerServiceWorker();
