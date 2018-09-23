import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import injectSheet from "react-jss";

import { Navbar } from "../components";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const styles = theme => ({
  root: {},
  content: {
    transition: "filter 0.2s ease"
  },
  blurred: {
    filter: "blur(1.5px)"
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
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
        <div className={classes.navbar}>
          <Navbar
            showMobileNav={showMobileNav}
            onShowMobileNav={this.handleShowMobileNav}
            onHideMobileNav={this.handleHideMobileNav} />
        </div>

        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
