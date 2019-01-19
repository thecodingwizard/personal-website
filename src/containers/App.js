import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import injectSheet from "react-jss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Navbar from "../components/Navbar";
import Home from "./Home";
import AboutPage from "./about/AboutPage";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const styles = theme => ({
  root: {},
  content: {
    transition: "filter 0.2s ease",
  },
  blurred: {
    filter: theme.isMobile ? "none" : "blur(1.5px)",
  },
  navbar: {
    transition: "filter 0.2s ease",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  pageTransition: {
    "&-enter": {
      opacity: 0,
      zIndex: 1,
      "&&-active": {
        opacity: 1,
        transition: "opacity 250ms ease-in",
      },
    },
    "&-exit": {
      // All this is basically "display: none"
      // but for some reason there are serious performance issues with "display: none"
      position: "absolute !important",
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      maxHeight: "100vh",
      overflow: "auto",
    }
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
  };

  handleNewPage = () => {
    document.querySelector("#root").focus();
    window.scrollTo(0, 0);
  };

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
          <TransitionGroup>
            <CSSTransition timeout={300} classNames={classes.pageTransition} key={this.props.location.key}>
              <Switch location={this.props.location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(injectSheet(styles)(App));
