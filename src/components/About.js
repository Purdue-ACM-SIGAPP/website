import React from "react";
import {Paper, Table, TableBody, TableHead, TableRow, TableCell} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import yearInfo from "../res/year-info";

const styles = {
	paper: {
		padding: '1em 2em',
		marginBottom: '2em',
		display: 'flex',
		flexDirection: 'column',
		"@media (max-width: 1000px)": {
			width: '75vw',
			marginLeft: '-12.5vw'
		},
		"@media (max-width: 600px)": {
			width: '95vw',
			marginLeft: '-22.5vw'
		}
	},
	paperContent: {
		alignSelf: 'center',
		maxWidth: '80%'
	}
};

const About = () => (
	<div className="my-tab">
		<Paper className="paper">
			<h2>Welcome to ACM SigApp!</h2>
			<img alt="ACM Logo" src={require("../res/img/acm-logos/acm.gif")}/>
			<p>We're a Special Interest Group (the Sig in SigApp) within ACM,
				focused on Applied Computing (the App in SigApp). While this has
				historically meant Android Apps due to the experience of our members,
				Applied Computing is really just a buzzword that means software
				development.</p>
			<p>Our goal is to give students opportunities to improve Purdue
				through software development.</p>
		</Paper>
		<Paper className="paper">
			<h2>Want To Learn More?</h2>
			<img alt="SIGApp Logo" src={require("../res/img/acm-logos/sigapp.png")}/>
			<p>We'd love to help! Our meetings are in LWSN B160 from 7pm to 8pm
				every Tuesday and Thursday.</p>
			<p>In the beginning of the fall semester,
				we typically do tutorials on different technologies, then think
				of one or more applications to develop for the rest of the year.</p>
			<p>Anybody who is interested is more than welcome to come to any or
				all meetings, even if our last meeting is your first. We'd love to
				tell you about what we do.</p>
		</Paper>
		<Paper className="paper">
			<h2>What Are We Doing This Semester?</h2>
			<p>Below you can find our rough schedule for the semester. Take a look
				at all the fun stuff we're doing!</p>
			<Table style={{tableLayout: 'auto'}}>
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell style={{textAlign: 'right'}}>Link?</TableCell>
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