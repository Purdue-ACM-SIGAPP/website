# Website
This is the website for ACM SigApp at Purdue University.

It is available to view at [https://sigapp.club]().

# Building
To see the website, you must first build it. Run:

    $ npm install
    $ npm start
    
This will run webpack and start the webpack dev server. The website is now viewable at `localhost:8080` and the
static files are available in the folder `dist/`.

# Updating the Schedule
Each semester, an officer should create a file under the folder `year-info`.
The file naming is currently [s|f][year].js, where s is spring, f is fall, 
and year is the last 2 digits of the year.

The file declares its export as an object with the following structure:

    module.exports = {
        officers: {
            president: {
                name: "",
                picture: ""
            },
            vicePresidents: [
                {
                    name: "",
                    picture: ""
                },
                ...
            ]
        },
        calendar: [
            {
                name: "",
                date: "yyyy-mm-dd",
                link: ""
            }
            ...
        ]
    };
    
 
  
If a meeting does not have a link, do not include a link property, 
and the page will gracefully reflect this.

Additionally, `year-info/index.js` should be updated to export the 
current semester.

# Adding Apps
When SigApp releases new apps, they should be added to the file `apps.js`. 
This file has the following structure:

    module.exports = [
        {
            name: "",
            description: "",
            picture: "",
            playStoreLink: "",
            appStoreLink: ""
        },
        ...
    ];
    
Similarly to the schedule, if an app is not released on either the Play Store
or the App Store, do not include the respective property, and the page will
not display the button.
