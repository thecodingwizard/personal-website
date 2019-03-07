import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({

});

const InfoBlock = props => {
  return (
    <div className="col">
      {props.title} -
      {props.children}
    </div>
  );
};

export default injectSheet(styles)(InfoBlock);