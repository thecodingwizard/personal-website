import React, { Component } from "react";
import injectSheet from "react-jss";

import { Navbar } from "../components";

const styles = theme => ({
  root: {
    backgroundImage: "linear-gradient(-45deg, #667eea 0%, #764ba2 100%)",
    width: "100vw",
    height: "100vh"
  },
  content: {
    transition: "filter 0.2s ease"
  },
  blurred: {
    filter: "blur(1.5px)"
  }
});

class App extends Component {
  state = {
    showMobileNav: false
  };

  handleShowMobileNav = () => this.setState({ showMobileNav: true });
  handleHideMobileNav = () => this.setState({ showMobileNav: false });

  render() {
    const { classes } = this.props;
    const { showMobileNav } = this.state;

    return (
      <div className={`${showMobileNav ? classes.blurred : ""} ${classes.root}`}>
        <Navbar
          showMobileNav={showMobileNav}
          onShowMobileNav={this.handleShowMobileNav}
          onHideMobileNav={this.handleHideMobileNav} />

        <div className={classes.content}>
          Some random content goes here!!!
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
