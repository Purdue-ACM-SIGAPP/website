import React from "react";
import Paper from "material-ui/Paper";
import {GridList, GridTile} from "material-ui/GridList";
import {officers} from "../year-info";
import "../styles/contact.scss";

const tilesData = [
	{
		name: "Facebook",
		picture: "https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png"
	},
	{name: "Slack", picture: "https://assets.brandfolder.com/ubhnmsn4/original/Slack_Mark_Web.png"},
	{name: "GitHub", picture: "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"},
	{
		name: "Google Drive",
		picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_of_Google_Drive.svg/2000px-Logo_of_Google_Drive.svg.png"
	},
];

const styles = {
	gridList: {
		display: 'flex',
		flexWrap: 'nowrap',
		overflowX: 'auto',
	},
	titleStyle: {
		color: 'rgb(0, 188, 212)',
	},
};

export default () => (
	<div className="my-tab">
		<Paper>
			<h2>Officers</h2>
			<GridList style={styles.gridList} cols={2.2}>
				{officers.map((tile) => (
					<GridTile
						key={tile.picture}
						title={tile.name}
						titleStyle={styles.titleStyle}
						titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
						<img src={tile.picture}/>
					</GridTile>
				))}
			</GridList>
		</Paper>
		<Paper>
			<h2>Social Media</h2>
			{tilesData.map((tile) => (
				<GridTile
					key={tile.picture}
					title={tile.name}
					titleStyle={styles.titleStyle}
					titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
					<img src={tile.picture}/>
				</GridTile>
			))}
		</Paper>
	</div>
);