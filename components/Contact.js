import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import '../styles/contact.scss';

let tilesData = [
    {title: "Facebook", img: "https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png"},
    {title: "Slack", img: "https://assets.brandfolder.com/ubhnmsn4/original/Slack_Mark_Web.png"},
    {title: "GitHub", img: "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"},
    {title: "Google Drive", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_of_Google_Drive.svg/2000px-Logo_of_Google_Drive.svg.png"},
    {title: "David Tschida (President)"},
    {title: "Jeff Hughes (Co-Vice President)"},
    {title: "Michael Vieck (Co-Vice President)"}
];

export default () => (
    <div className="my-tab">
        <GridList>
            {tilesData.map((tile, i) => (
                <GridTile
                    key={i}
                    title={tile.title}
                    containerElement="a">
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);