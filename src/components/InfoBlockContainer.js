import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({

});

const InfoBlockContainer = props => {
  return (
    <div className="row">
      {props.children}
    </div>
  );
};

export default injectSheet(styles)(InfoBlockContainer);