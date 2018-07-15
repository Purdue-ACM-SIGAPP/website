import React from "react";
import { CssBaseline, Tab, Tabs, Toolbar, AppBar, Typography, IconButton } from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import {tabs} from './res/tabs';

const styles = {
	// myTab: {
	// 	maxWidth: '80vw',
	// 	left: '10vw',
	// 	position: 'relative',
	// 	minHeight: 'calc(100vh - 112px)',
	// 	padding: '2em 0'
	// },
	// tab: {
	// 	backgroundColor: '#EEEEEE'
	// },
	// app: {
	// 	height: '100%'
	// },
	// body: {
	// 	margin: 0
  // }
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class App extends React.Component {
	state = {
		activeTab: 0
  };
  
  setActiveTab = (e, activeTab) => this.setState({activeTab});

	render() {
		const {classes} = this.props;
    const activeTab = tabs[this.state.activeTab];

		return (
			<div className={classes.app}>
				<CssBaseline />
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Purdue ACM SIGApp
                    </Typography>
            </Toolbar>
            <Tabs fullWidth centered
                  onChange={this.setActiveTab}
                  value={this.state.activeTab}>
              {tabs.map((tab, i) => <Tab label={tab.title} className="tab" id={i} key={i} />)}
            </Tabs>
          </AppBar>
        </div>
			
				<activeTab.component />
			</div>
		);
	}
}

export default withStyles(styles)(App);