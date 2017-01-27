import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import About from './About';
import Apps from './Apps';
import ContactUs from './Contact';

import 'normalize.css'
import '../styles/site.scss';

export default () => (
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="app">
            <AppBar title="ACM SigApp"/>
            <Tabs>
                <Tab label="About Us" className="tab" id={1}><About /></Tab>
                <Tab label="Our Apps" className="tab" id={2}><Apps /></Tab>
                <Tab label="Contact Us" className="tab" id={3}><ContactUs /></Tab>
            </Tabs>
        </div>
    </MuiThemeProvider>
);