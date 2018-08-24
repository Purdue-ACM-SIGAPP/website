import React from "react";
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import yearInfo from "../res/year-info";

const styles = {
	root: {
		padding: "1rem"
	},
	paper: {
		width: "50%",
		padding: "1rem 2rem",
		display: "flex",
		flexDirection: "column",
		"&:not(:first-child)": {
			marginTop: "1rem",
		},
		"@media (max-width: 1280px)": {
			width: "75%"
		},
		"@media (max-width: 960px)": {
			width: "100%"
		}
	},
	img: {
		width: "75%",
		height: "auto",
		margin: 'auto'
	},
	imgContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '1rem 0'
	}
};

const About = ({classes}) => (
	<div className={classes.root}>
		<Paper className={classes.paper}>
			<Typography gutterBottom variant="headline" component="h2">
				Welcome to SIGApp!
			</Typography>
			<Grid container>
				<Grid item xs={3} className={classes.imgContainer}><img className={classes.img} alt="ACM Logo"
				                                                        src="/img/logos/acm.png" /></Grid>
				<Grid item xs={9} className={classes.imgContainer}><img className={classes.img} alt="SIGApp Logo"
				                                                        src="/img/logos/sigapp.png" /></Grid>
			</Grid>
			<Typography variant="body1" gutterBottom>
				We're a Special Interest Group (the SIG in SIGApp) within ACM, focused
				on Applied Computing (the App in SIGApp). While this has historically
				meant Android Apps due to the experience of our members, Applied
				Computing is really just a buzzword that means software development.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Our goal is to give students opportunities to improve Purdue through
				software development.
			</Typography>
		</Paper>
		<Paper className={classes.paper}>
			<Typography gutterBottom variant="headline" component="h2">
				Want To Learn More?
			</Typography>

			<Typography variant="body1" gutterBottom>
				We'd love to meet you! Our meetings are in LWSN B160 from 7pm to 8pm every
				Tuesday and Thursday.
			</Typography>
			<Typography variant="body1" gutterBottom>
				In the beginning of the fall semester, we typically do tutorials on
				different technologies, then think of one or more applications to
				develop for the rest of the year.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Anybody who is interested is more than welcome to come to any or all
				meetings, even if our last meeting is your first. We'd love to tell you
				about what we do.
			</Typography>
		</Paper>
		<Paper className={classes.paper}>
			<Typography gutterBottom variant="headline" component="h2">
				What Are We Doing This Semester?
			</Typography>
			<Typography variant="body1" gutterBottom>
				Below you can find our approximate schedule for the semester. Take a look at
				all the fun stuff we're doing! All of our tutorials and projects will always be
				on GitHub and Google Drive if you want to look at them.
			</Typography>
			<Table style={{tableLayout: "auto"}}>
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Link?</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{yearInfo.calendar.map((e, i) => (
						<TableRow key={i}>
							<TableCell>{e.date}</TableCell>
							<TableCell>{e.name}</TableCell>
							<TableCell>{e.link ? <a href={e.link}>Yes</a> : "No"}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	</div>
);

export default withStyles(styles)(About);
