import React from "react";
import injectSheet from "react-jss";

import PercentageBar from "./PercentageBar";

const styles = theme => ({
  root: {
    marginBottom: "1rem",
  },
  labels: {
    marginBottom: "0.4rem",
  },
  labelLeft: {
    float: "left",
  },
  labelRight: {
    float: "right",
  },
});

const Skill = (props) => {
  const { label, percent, classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.labels}>
        <span className={classes.labelLeft}>{label}</span>
        <span className={classes.labelRight}>{percent}%</span>
        <div style={{ clear: "both" }}></div>
      </div>
      <PercentageBar percent={percent} />
    </div>
  );
};

export default injectSheet(styles)(Skill);