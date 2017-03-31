#Website
This is the website for ACM SigApp at Purdue University.

It is available to view at [https://sigapp.club]().

#Updating
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
    
 
  
Additionally, `year-info/index.js` should be updated to export the 
current semester.