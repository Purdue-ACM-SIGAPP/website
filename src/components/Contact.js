import React from "react";
import {GridList, GridListTile, GridListTileBar, Card, CardContent, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import yearInfo from "../res/year-info";
import socialMedia from '../res/social-media';

const styles = {
  root: {
    padding: "0 1rem"
  },
  card: {
    width: "50%",
    margin: "1rem auto",
    "@media (max-width: 1280px)": {
      width: "75%"
    },
    "@media (max-width: 960px)": {
      width: "100%"
    }
  },
  img: {
    width: "100%",
    height: "auto"
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	logo: {
		width: '100%',
		height: 'auto'
	}
};

const Contact = ({classes}) => (
	<div className={classes.root}>
		<Card className={classes.card}>
			<CardContent>
			<Typography gutterBottom variant="headline" component="h2">
				Officers
			</Typography>
			<GridList cellHeight={350} cols={2} spacing={24}>
				{Object.entries(yearInfo.officers).map(([position, officers]) => officers.map(officer => (
					<GridListTile key={officer.name}>
						<img className={classes.img} src={officer.picture} alt={officer.name} />
						<GridListTileBar title={officer.name} subtitle={position} />
					</GridListTile>
				)))}
			</GridList>
			</CardContent>
		</Card>
		<Card className={classes.card}>
				<CardContent>
			<Typography gutterBottom variant="headline" component="h2">
				Social Media
			</Typography>
			<GridList cols={4} spacing={24}>
				{socialMedia.map(tile => (
					<GridListTile
						key={tile.picture}
						title={tile.name}
						component='a'
						href={tile.link}>
						<div className={classes.logoContainer}>
							<img className={classes.logo} src={tile.picture} alt={tile.name}/>
						</div>
					</GridListTile>
				))}
			</GridList>
			</CardContent>
		</Card>
	</div>
);

export default withStyles(styles)(Contact);