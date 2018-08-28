import React from "react";
import {Button, Card, CardActions, CardContent, Grid, Typography, Hidden} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import apps from "../res/apps";

const styles = {
	root: {
		padding: '1rem'
	},
	largePicture: {
		width: '100%',
		height: 'auto'
	},
	smallPicture: {
		flex: '0 0 25%'
	},
	smallCard: {
		display: 'flex',
		flexDirection: 'row',
		"& img": {
			width: "auto",
			height: '100%'
		},
	},
	smallContent: {
		flex: '1'
	},
	xSmallTitle: {
		display: 'flex',
		flexDirection: 'row'
	},
	xSmallTitleContent: {
		display: 'flex',
		flexDirection: 'column'
	}
};

const XSmallCard = (app, classes) => (
	<Hidden smUp>
		<Card className={classes.smallCard}>
			<div className={classes.xSmallTitle}>
				<img
					className={classes.smallPicture}
					src={app.picture}
					alt={`${app.name} icon`}
				/>
				<div className={classes.xSmallTitleContent}>
					<Typography variant="headline">{app.name}</Typography>
					<a href={app.playStoreLink}><img src="/img/google-play-badge.png" alt="Play Store logo" /></a>
				</div>
			</div>
			<CardContent>
				<Typography variant="subheading" color="textSecondary">
					{app.description}
				</Typography>
			</CardContent>
		</Card>
	</Hidden>
);

const SmallCard = (app, classes) => (
	<Hidden xsDown mdUp>
		<Card className={classes.smallCard}>
			<img
				className={classes.smallPicture}
				src={app.picture}
				alt={`${app.name} icon`}
			/>
			<div className={classes.smallContent}>
				<CardContent>
					<Typography variant="headline">{app.name}</Typography>
					<Typography variant="subheading" color="textSecondary">
						{app.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button href={app.playStoreLink} size="small" color="primary">
						Play Store
					</Button>
				</CardActions>
			</div>
		</Card>
	</Hidden>
);

const BigCard = (app, classes) => (
		<Card>
			<img
				className={classes.largePicture}
				alt={app.name}
				src={app.picture}
			/>
			<CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					{app.name}
				</Typography>
				<Typography component="p">{app.description}</Typography>
			</CardContent>
			<CardActions>
				<Button href={app.playStoreLink} size="small" color="primary">
					Play Store
				</Button>
			</CardActions>
		</Card>
);

const Apps = ({classes}) => (
	<div className={classes.root}>
		<Grid container spacing={16} justify="center">
			{apps.map((app, i) => (
				<Grid item xs={12} md={3} key={i}>
					{/*{XSmallCard(app, classes)}*/}
					{SmallCard(app, classes)}
					<Hidden smDown>{BigCard(app, classes)}</Hidden>
					<Hidden smUp>{BigCard(app, classes)}</Hidden>
				</Grid>
			))}
		</Grid>
	</div>
);

export default withStyles(styles)(Apps);