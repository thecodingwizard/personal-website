import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import injectSheet from "react-jss";

import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const styles = theme => ({
  root: {},
  content: {
    transition: "filter 0.2s ease",
  },
  blurred: {
    filter: "blur(1.5px)"
  },
  navbar: {
    transition: "filter 0.2s ease",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});

class App extends Component {
  state = {
    showMobileNav: false,
    showTransparentNav: true,
  };

  handleShowMobileNav = () => this.setState({ showMobileNav: true });
  handleHideMobileNav = () => this.setState({ showMobileNav: false });
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.unlistenHistory = this.props.history.listen(() => this.handleNewPage());
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    this.unlistenHistory();
  }
  
  handleScroll = (event) => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0 && this.state.showTransparentNav) {
      this.setState({ showTransparentNav: false });
    } else if (scrollPos === 0 && !this.state.showTransparentNav) {
      this.setState({ showTransparentNav: true });
    }
  }

  handleNewPage = () => {
    document.querySelector("#root").focus();
  }

  render() {
    const { classes } = this.props;
    const { showMobileNav, showTransparentNav } = this.state;

    return (
      <div className={classes.root}>
        <div className={`${classes.navbar} ${showMobileNav ? classes.blurred : ""}`}>
          <Navbar
            showMobileNav={showMobileNav}
            onShowMobileNav={this.handleShowMobileNav}
            onHideMobileNav={this.handleHideMobileNav}
            showTransparentBackground={showTransparentNav} />
        </div>

        <div className={`${classes.content} ${showMobileNav ? classes.blurred : ""}`}>
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

export default withRouter(injectSheet(styles)(App));
