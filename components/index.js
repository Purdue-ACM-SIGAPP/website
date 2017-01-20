import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import About from './About';
import Apps from './Apps';
import ContactUs from './Contact';

// I'm having troubles on my machine, but this will work on a proper setup (AKA not WSL)
// import 'normalize.css'
import '../styles/site.scss';

export default () => (
    <MuiThemeProvider>
        <div>
            <AppBar title="ACM SigApp"/>
            <Tabs>
                <Tab label="About Us"><About className="tab"/></Tab>
                <Tab label="Our Apps"><Apps className="tab" /></Tab>
                <Tab label="Contact Us"><ContactUs className="tab" /></Tab>
            </Tabs>
        </div>
    </MuiThemeProvider>
);