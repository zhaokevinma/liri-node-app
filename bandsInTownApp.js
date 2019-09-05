// Require keys and store in variable
var keys = require("./keys");

// To import axios npm package
var axios = require("axios");

// To import moment npm package
var moment = require("moment");

function bandsInTownApp(userInput) {
    var artist = userInput;
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bandsInTown.id;

    axios.get(url).then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            console.log("--------------------------\n");
            console.log("Concert Time: " + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
            console.log("Concert Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
            console.log("Concert Venue: " + response.data[i].venue.name);
            console.log("\n--------------------------\n");
        }
    });
}

// Exporting the function which we will use in main.js
module.exports = bandsInTownApp;