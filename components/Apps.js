import React from "react";
import {Card, CardActions, CardMedia, CardText, CardTitle} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import apps from "../apps";

export default () => (
	<div className="my-tab apps">
		{apps.map(app => (
			<Card className="app-card">
				<CardMedia className="app-media">
					<img src={app.picture}/>
				</CardMedia>
				<CardTitle title={app.name}/>
				<CardText>{app.description}</CardText>
				<CardActions>
					{app.playStoreLink ? <FlatButton href={app.playStoreLink} label="Play Store"/> : ""}
					{app.appStoreLink ? <FlatButton href={app.appStoreLink} label="App Store"/> : ""}
				</CardActions>
			</Card>
		))}
	</div>
);
