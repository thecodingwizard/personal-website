import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
	root: {
		"background": "linear-gradient(45deg, rgba(1,219,240,1) 0%, rgba(124,126,240,1) 50%, rgba(204,94,240,1) 100%)",
		paddingTop: theme.navHeight,
		minHeight: "100vh",
	},
});

class About extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				
			</div>
		);
	}
}

export default injectSheet(styles)(About);