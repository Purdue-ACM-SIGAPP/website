import React from "react";
import {Button, Grid, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import apps from "../res/apps";

const styles = {
	root: {
		padding: '1rem'
	},
	media: {
		width: '100%',
		height: 'auto'
	}
};

const Apps = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={16} justify='center'>
      {apps.map((app, i) => (
        <Grid item xs={6} lg={3} key={i}>
          <Card>
            {/* CardMedia goes about images in a strange way that doesn't work for our use case */}
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
        </Grid>
      ))}
    </Grid>
  </div>
);

export default withStyles(styles)(Apps);