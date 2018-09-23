import React, { Component } from "react";
import injectSheet from "react-jss";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";
import EmailIcon from "mdi-react/EmailIcon";
import WebIcon from "mdi-react/WebIcon";

const styles = theme => ({
	root: {
		backgroundImage: "linear-gradient(-45deg, #667eea 0%, #764ba2 100%)",
    width: "100vw",
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	content: {
		textAlign: "center",
		fontFamily: "'Open Sans', sans-serif",
		color: "#fff",
		marginTop: theme.navHeight,
		marginBottom: theme.navHeight,
	},
	greeting: {
		fontWeight: 600,
		fontSize: "4rem",
		color: "rgba(255, 255, 255, 0.96)",
		marginBottom: "0.75rem",
	},
	description: {
		fontWeight: "normal",
		fontSize: "3rem",
		color: "rgba(255, 255, 255, 0.93)",
		marginTop: 0,
	},
	socialMediaLink: {
		display: "inline-block",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    width: "3rem",
    height: "3rem",
		margin: "0 0.5rem",
		backgroundColor: "rgba(60, 64, 198, 0.2)",
		transition: "background-color 0.2s, color 0.2s",
		color: "#fff",
    "&:focus": {
      outline: "none",
		},
		"&:hover, &:focus": {
			color: "#3c40c6",
      backgroundColor: "#fff"
		},
    borderRadius: "100%",
    padding: 0,
		lineHeight: "3.75rem",
		textDecoration: "none",
	}
});

class Home extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.content}>
					<h1 className={classes.greeting}>Hi! I&apos;m Nathan Wang</h1>
					<h2 className={classes.description}>I&apos;m a Programmer</h2>
					<div>
						<a href="https://thecodingwizard.me/" className={classes.socialMediaLink}>
							<WebIcon size={24} />
						</a>
						<a href="mailto:nathan.r.wang@gmail.com" className={classes.socialMediaLink}>
							<EmailIcon size={24} />
						</a>
						<a href="https://www.github.com/thecodingwizard/" className={classes.socialMediaLink}>
							<GithubCircleIcon size={24} />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(Home);