import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  meter: {
    background: "#eee",
    borderRadius: "5px",
    height: "6px",
  },
  fill: {
    display: "block",
    borderRadius: "5px",
    backgroundColor: "rgb(72, 72, 72)",
    height: "6px",
  }
});

const PercentageBar = (props) => {
  const { classes, percent } = props;
  return (
    <div className={classes.meter}>
      <span className={classes.fill} style={{ width: `${percent}%` }}></span>
    </div>
  );
};

export default injectSheet(styles)(PercentageBar);