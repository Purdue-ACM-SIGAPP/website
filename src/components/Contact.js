import React from "react";
import {GridList, GridListTile, GridListTileBar, Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import yearInfo from "../res/year-info";
import socialMedia from '../res/social-media';

const styles = {
	lastChild: {
		marginBottom: 0
	}
}

const officerStyles = {
	display: 'flex',
	flexWrap: 'nowrap',
	overflowX: 'auto'
};

const Contact = () => (
	<div className="my-tab contact">
		<Paper className="paper">
			<h2>Officers</h2>
			<GridList style={officerStyles} cols={2.2}>
				{Object.entries(yearInfo.officers).map(([position, officers]) => officers.map(officer => (
					<GridListTile key={officer.name}>
						<img src={officer.picture} alt={officer.name} />
						<GridListTileBar title={officer.name} subtitle={position} />
					</GridListTile>
				)))}
			</GridList>
		</Paper>
		<Paper className="paper">
			<h2>Social Media</h2>
			<GridList style={officerStyles}>
				{socialMedia.map(tile => (
					<GridListTile
						key={tile.picture}
						title={tile.name}
						component='a'
						href={tile.link}>
						<img src={tile.picture} alt={tile.name}/>
					</GridListTile>
				))}
			</GridList>
		</Paper>
	</div>
);

export default withStyles(styles)(Contact);