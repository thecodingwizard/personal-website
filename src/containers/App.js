import React, { Component } from "react";
import injectSheet from "react-jss";

import { Navbar } from "../components";

const styles = theme => ({
  root: {
    backgroundImage: "linear-gradient(-45deg, #667eea 0%, #764ba2 100%)",
    width: "100vw",
    height: "100vh"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Navbar />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
