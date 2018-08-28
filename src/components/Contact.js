import React from "react";
import {Card, CardContent, Grid, GridListTile, GridListTileBar, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import yearInfo from "../res/year-info";
import socialMedia from '../res/social-media';

const styles = {
	root: {
		padding: "1rem"
	},
	card: {
		width: "50%",
		margin: "0 auto",
		"&:not(:first-child)": {
			marginTop: "1rem"
		},
		"@media (max-width: 1280px)": {
			width: "75%"
		},
		"@media (max-width: 960px)": {
			width: "100%"
		}
	},
	img: {
		width: "100%"
	},
	logo: {
		width: '100%',
		height: 'auto'
	},
	tile: {
		height: '97%'
	}
};

const Contact = ({classes}) => (
	<div className={classes.root}>
		<Card className={classes.card}>
			<CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					Officers
				</Typography>
				<Grid container spacing={24}>
					{Object.entries(yearInfo.officers).map(([position, officers]) => officers.map(officer => (
						<Grid item xs={12} sm={6}>
							<GridListTile key={officer.name} component='div' className={classes.tile}>
								<img className={classes.img} src={officer.picture} alt={officer.name} />
								<GridListTileBar title={officer.name} subtitle={position} />
							</GridListTile>
						</Grid>
					)))}
				</Grid>
			</CardContent>
		</Card>
		<Card className={classes.card}>
			<CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					Social Media
				</Typography>
				<Grid container spacing={24}>
					{socialMedia.map(tile => (
						<Grid item key={tile.picture} xs={6} sm={3}>
							<a href={tile.link}>
								<img className={classes.logo} src={tile.picture} alt={tile.name} />
							</a>
						</Grid>
					))}
				</Grid>
			</CardContent>
		</Card>
	</div>
);

export default withStyles(styles)(Contact);