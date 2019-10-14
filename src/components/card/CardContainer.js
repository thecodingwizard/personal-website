import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  cardContainer: {
    composes: ["row"],
    marginLeft: "-31px",
    marginRight: "-31px",
    marginTop: "3rem",
  },
});

class CardContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(styles)(CardContainer);