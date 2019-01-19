import React, { Component } from "react";
import MobileDetect from "mobile-detect";
import injectSheet from "react-jss";

let transition = 800;
let time = 2000;

const styles = theme => ({
  fade: {
    opacity: 1,
    transition: `opacity ${transition-10}ms`
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

class Typed extends Component {
  state = {
    current: 0,
    isVisible: false,
  };
  _isMounted = true;

  componentDidMount() {
    this.setState({ isVisible: true });
    setTimeout(() => {
      this.handleFade();
    }, transition + time);
  }

  componentWillUnmount() {
    if (this.typed) this.typed.destroy();
    this._isMounted = false;
  }
  
  handleFade = () => {
    if (!this._isMounted) return;
    
    this.setState({
      isVisible: false
    });
    setTimeout(() => {
      if (!this._isMounted) return;
      
      this.setState(state => ({
        current: (state.current+1)%this.props.strings.length,
        isVisible: true,
      }));
      
      setTimeout(this.handleFade, transition + time);
    }, transition);
  };

  render() {
    const { classes, strings } = this.props;
    const { isVisible, current } = this.state;

    return (
      <div>
        <span className={`${classes.fade} ${isVisible ? classes.visible : classes.hidden}`}>
          {strings[current]}
        </span>
      </div>
    );
  }
}

export default injectSheet(styles)(Typed);