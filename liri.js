// To read and set any environment variables with the dotenv package
require("dotenv").config();

// To require movieApp function from movieApp.js
var movieApp = require("./movieApp.js");

// To require spotifyApp function from movieApp.js
var spotifyApp = require("./spotifyApp.js");

// To store userCommand
var userCommand = process.argv[2];

// To store and process userInput
var userInput = process.argv.splice(3, process.argv.length).join('+');

// Switch case conditions to choose apps
switch (userCommand) {
    case "help":
        console.log("Please type one of these commands\n"+
                    "'concert-this': to search a concert\n"+
                    "'spotify-this-song': to search a song\n"+
                    "'movie-this': to search a movie\n"+
                    "'do-what-it-says': using command from random.txt \n"
                    );
        break;
    case "movie-this":
        movieApp(userInput);
        break;
    case "spotify-this-song":
        spotifyApp(userInput);
        break;
    default:
        console.log("Please type 'node liri.js help' for instructions");
}