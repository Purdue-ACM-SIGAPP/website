import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "./acm-theme";
import {Tab, Tabs} from "material-ui/Tabs";
import MyAppBar from "./components/MyAppBar";
import About from "./components/About";
import Apps from "./components/Apps";
import ContactUs from "./components/Contact";

import "normalize.css";
import "./styles/index.scss";

export default () => (
	<MuiThemeProvider muiTheme={getMuiTheme(theme)}>
		<div className="app">
			<MyAppBar />
			<Tabs>
				<Tab label="About Us" className="tab" id={1}><About/></Tab>
				<Tab label="Our Apps" className="tab" id={2}><Apps /></Tab>
				<Tab label="Contact Us" className="tab" id={3}><ContactUs /></Tab>
			</Tabs>
		</div>
	</MuiThemeProvider>
);