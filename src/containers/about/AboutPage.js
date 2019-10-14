import React, { Component } from "react";
import injectSheet from "react-jss";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";

const styles = theme => ({
  root: {},
});

class AboutPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AboutHero />
        <AboutContent />
      </div>
    );
  }
}

export default injectSheet(styles)(AboutPage);