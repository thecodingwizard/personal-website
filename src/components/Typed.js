import React, { Component } from "react";
import TypedJS from "typed.js";

class Typed extends Component {
	constructor(props) {
		super(props);

		this.el = React.createRef();
	}

	componentDidMount() {
		const { strings } = this.props;

		const options = {
			strings: strings,
			typeSpeed: 30,
			backSpeed: 20,
			backDelay: 2000,
			loop: true,
			smartBackspace: true,
		};

		this.typed = new TypedJS(this.el.current, options);
	}

	componentWillUnmount() {
    this.typed.destroy();
  }

	render() {
		return (
			<span ref={this.el} />
		);
	}
}

export default Typed;