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
      if (key in breakpoints) return `@media (max-width: ${breakpoints[key]}px)`;
      else return `@media (max-width: ${key})`;
    },
    up(key) {
      if (key in breakpoints) return `@media (min-width: ${breakpoints[key]}px)`;
      else return `@media (min-width: ${key})`;
    }
  },
  navHeight: "5.5rem",
};

registerServiceWorker();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

window.onload = function() {
  setTimeout(() => {
    let whitewash = document.querySelector("#whitewash");
    let loading = document.querySelector("#loading");
    whitewash.classList.add("whitewash--animating");

    setTimeout(() => {
      whitewash.parentNode.removeChild(whitewash);
      loading.parentNode.removeChild(loading);
    }, 700);

    setTimeout(() => {
      document.querySelector("#root").classList.add("root--visible");
    }, 400);

  }, 150); // give time for dom to render to avoid jittery animation
};
