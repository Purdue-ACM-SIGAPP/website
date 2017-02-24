import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class MyAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.switchOpen = this.switchOpen.bind(this);
        this.state = {
            open: false
        };
    }
    
    switchOpen() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div>
                <AppBar title = "ACM SigApp"
                        onLeftIconButtonTouchTap = {this.switchOpen} />
                <Drawer open={this.state.open} docked={false} useLayerForClickAway={true} onRequestChange={this.switchOpen}>
                    <Subheader>Talk To Us</Subheader>
                    <MenuItem href="https://purdueacmsigapp.slack.com/">Slack</MenuItem>
                    <MenuItem href="https://facebook.com/groups/PurdueACMSigApp">Facebook</MenuItem>
                    <Divider />
                    <Subheader>Code With Us</Subheader>
                    <MenuItem href="https://drive.google.com/drive/folders/0ByBsXZAwFI0qSzY4NGFWeUZqeEU">Google Drive</MenuItem>
                    <MenuItem href="https://github.com/purdue-acm-sigapp">GitHub</MenuItem>
                </Drawer>
            </div>
        );
    }
}
