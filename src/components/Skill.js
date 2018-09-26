import React from "react";
import injectSheet from "react-jss";

import PercentageBar from "./PercentageBar";

const styles = theme => ({

});

const Skill = (props) => {
  const { label, percent, classes } = props;
  return (
    <div>
      <div>{label}</div>
      <PercentageBar percent={percent} />
    </div>
  );
};

export default injectSheet(styles)(Skill);