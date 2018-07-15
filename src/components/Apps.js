import React from "react";
import {Button, Card, CardActions, CardMedia, CardContent, Typography} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import apps from "../res/apps";

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	card: {
		width: '20vw',
		"@media (max-width: 1000px)": {
			width: '35vw'
		},
		"@media (max-width: 600px)": {
			width: '50vw'
		}
	},
	media: {
		backgroundColor: '#9E9E9E'
	},
	image: {
		minWidth: '80% !important',
		maxWidth: '80% !important',
		height: 'auto',
		margin: '10%'
	}
};

const Apps = () => (
  <div className="my-tab apps">
    {apps.map((app, i) => (
      <Card key={i} raised className="app-card">
        <CardMedia className="app-media" title={app.name} image={app.picture} />
        <CardContent>
					<Typography gutterBottom variant="headline" component="h2">{app.name}</Typography>
					<Typography component="p">{app.description}</Typography>
				</CardContent>
        <CardActions>
          <Button href={app.playStoreLink} size="small" color="primary">Play Store</Button>
        </CardActions>
      </Card>
    ))}
  </div>
);

export default withStyles(styles)(Apps);