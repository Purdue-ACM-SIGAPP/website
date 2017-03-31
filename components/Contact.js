import React from "react";
import Paper from "material-ui/Paper";
import "../styles/contact.scss";

const tilesData = [
	{title: "Facebook", img: "https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png"},
	{title: "Slack", img: "https://assets.brandfolder.com/ubhnmsn4/original/Slack_Mark_Web.png"},
	{title: "GitHub", img: "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"},
	{
		title: "Google Drive",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_of_Google_Drive.svg/2000px-Logo_of_Google_Drive.svg.png"
	},
];

export default () => (
	<div className="my-tab">
		<Paper>
			<h2>Officers</h2>
		</Paper>
		<Paper>
			<h2>Social Media</h2>
		</Paper>
	</div>
);