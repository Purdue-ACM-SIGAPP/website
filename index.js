import App from "./render";
import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

document.body.appendChild(document.createElement('div'));
ReactDOM.render(<App />, document.getElementsByTagName('div')[0]);