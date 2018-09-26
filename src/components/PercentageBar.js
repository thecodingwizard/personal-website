import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({

});

const PercentageBar = (props) => {
  const { classes, percent } = props;
  return (
    <div>
      {percent}
    </div>
  );
};

export default injectSheet(styles)(PercentageBar);