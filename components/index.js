import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import About from './About';
import Apps from './Apps';
import ContactUs from './Contact';

export default () => (
    <div>
        <AppBar title="ACM SigApp"/>
        <Tabs>
            <Tab label="About Us"><About/></Tab>
            <Tab label="Our Apps"><Apps/></Tab>
            <Tab label="Contact Us"><ContactUs/></Tab>
        </Tabs>
    </div>
);