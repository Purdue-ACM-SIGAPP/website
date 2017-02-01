import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import calendar from './calendar.s17';
import '../styles/about.scss';

export default () => (
    <div className="my-tab">
        <Paper className="paper">
            <h2>Welcome to ACM SigApp!</h2>
            <img src="img/acm_logo.gif" />
            <p>We're a Special Interest Group (the Sig in SigApp) within ACM, 
                focused on Applied Computing (the App in SigApp). While this has
                historically meant Android Apps due to the experience of our members,
                Applied Computing is really just a buzzword that means software 
                development.</p>
            <p>Our goal is to give students opportunities to improve Purdue 
                through software development.</p>
        </Paper>
        <Paper className="paper">
            <h2>Want To Learn More?</h2>
            <img src="img/sigapp_logo.png" />
            <p>We'd love to help! Our meetings are in LWSN B148 from 7pm to 8pm
                every Tuesday and Thursday.</p>
            <p>In the beginning of the fall semester, 
                we typically do tutorials on different technologies, then think
                of one or more applications to develop for the rest of the year.</p>
            <p>Anybody who is interested is more than welcome to come to any or 
                all meetings, even if our last meeting is your first. We'd love to 
                tell you about what we do.</p>
        </Paper>
        <Paper className="paper">
            <h2>What Are We Doing This Semester?</h2>
            <p>Below you can find our rough schedule for the semester. Take a look
                at all the fun stuff we're doing!</p>
            <List>
                {calendar.map((e, i) => (
                    <ListItem id={i} primaryText={e.name} />
                ))}
            </List>
        </Paper>
    </div>
);