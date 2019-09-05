// To import node-spotify-api npm package
var Spotify = require('node-spotify-api');

// To import the keys.js and store it in a variable
var keys = require("./keys.js");

// API keys
var spotify = new Spotify(keys.spotify);


function spotifyApp(userInput) {
    var song = userInput;
    if(!song) {
        song = "Without Me";
    } else {
        spotify.search({ type: 'track', query: song}, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                console.log("--------------------------\n");
                console.log("Song Name: " + data.tracks.items[0].name);
                console.log("Artist(s) Name: "+ data.tracks.items[0].artists[0].name);
                console.log("Album Name: "+ data.tracks.items[0].album.name);
                console.log("Preview URL: " + data.tracks.items[0].preview_url);
                console.log("\n--------------------------\n");
            }
        });
    }
}

// To export the movieApp function 
module.exports = spotifyApp;