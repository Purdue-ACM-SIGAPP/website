import React from "react";
import { CssBaseline, Tab, Tabs, Toolbar, AppBar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

import {tabs} from './res/tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    textAlign: 'center',
    color: theme.palette.secondary.main
  },
  tab: {
    color: theme.palette.secondary.main
  }
});


class App extends React.Component {
	state = {
		activeTab: 0
  };
  
  setActiveTab = (e, activeTab) => this.setState({activeTab});

  setActiveIndex = activeTab => this.setState({activeTab});

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.app}>
				<CssBaseline />
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" className={classes.flex}>
                Purdue ACM SIGApp
                    </Typography>
            </Toolbar>
            <Tabs fullWidth centered
                  onChange={this.setActiveTab}
                  value={this.state.activeTab}>
              {tabs.map((tab, i) => <Tab label={tab.title} className={classes.tab} id={i} key={i} />)}
            </Tabs>
          </AppBar>
        </div>
        <SwipeableViews
          // animateHeight
          axis={'x'}
          index={this.state.activeTab}
          onChangeIndex={this.setActiveIndex}
        >
          {tabs.map((tab, i) => <tab.component key={i} />)}
        </SwipeableViews>
			</div>
		);
	}
}

export default withStyles(styles)(App);