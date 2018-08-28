import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    MuiThemeProvider,
    createMuiTheme
} from "@material-ui/core/styles";
import theme from "./res/acm-theme";
import registerServiceWorker from './registerServiceWorker';

import ReactGA from "react-ga";
ReactGA.initialize("UA-51109974-5");
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<MuiThemeProvider theme={createMuiTheme(theme)}>
		<App />
	</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
