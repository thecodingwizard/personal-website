import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  root: {
    backgroundColor: "#F0F4F8",
    padding: "3.5rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "300",
    fontFamily: "Roboto",
    marginTop: 0,
  },
});

class WebTechnologies extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="container">
          <h2 className={classes.title}>Front End Web Development</h2>
          <p>I specialize in front-end web development, building complex Single-Page Applications.</p>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(WebTechnologies);