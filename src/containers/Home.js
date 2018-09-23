import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
	root: {
		backgroundImage: "linear-gradient(-45deg, #667eea 0%, #764ba2 100%)",
    width: "100vw",
		height: "100vh",
		paddingTop: theme.navHeight,
	}
});

class Home extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				Home
			</div>
		);
	}
}

export default injectSheet(styles)(Home);