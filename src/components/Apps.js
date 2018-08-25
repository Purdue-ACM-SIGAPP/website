import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import apps from "../res/apps";

const styles = theme => ({
	root: {
		padding: '1rem'
	},
	media: {
		width: '100%',
		height: 'auto'
	},
	bigCard: {
		"@media (max-width: 960px)": {
			display: 'none'
		}
	},
	smallCard: {
		display: 'flex',
		flexDirection: 'row',
		"& img": {
			width: "auto",
			height: '100%'
		},
		"@media (min-width: 960px)": {
			display: 'none'
		}
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	}
});

const SmallCard = (app, classes) => (
	<Card className={classes.smallCard}>
		<div className={classes.details}>
			<img
				className={classes.img}
				src={app.picture}
			/>
			<CardContent className={classes.content}>
				<Typography variant="headline">{app.name}</Typography>
				<Typography variant="subheading" color="textSecondary">
					{app.description}
				</Typography>
			</CardContent>
		</div>
	</Card>
);

const BigCard = (app, classes) => (
	<Card className={classes.bigCard}>
		<img
			className={classes.media}
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
				<Grid item xs={12} md={6} lg={3} key={i}>
					{SmallCard(app, classes)}
					{BigCard(app, classes)}
				</Grid>
			))}
		</Grid>
	</div>
);

export default withStyles(styles)(Apps);