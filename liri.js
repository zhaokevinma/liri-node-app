// To read and set any environment variables with the dotenv package
require("dotenv").config();

// To require movieApp function from movieApp.js
var movieApp = require("./movieApp.js");

// To require spotifyApp function from movieApp.js
var spotifyApp = require("./spotifyApp.js");

// To require bandsInTownApp function from movieApp.js
var bandsInTownApp = require("./bandsInTownApp.js");

//To import File System npm package
var fs = require("fs");

// To store userCommand
var userCommand = process.argv[2];

// To store and process userInput
var userInput = process.argv.splice(3, process.argv.length).join('+');

// doWhatItSays function
function doWhatItSays () {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        } else {
            var dataArr = data.split(",");

            switch (dataArr[0]) {
                case "movie-this":
                    var movie = dataArr[1].slice(1,-1);
                    movieApp(movie);
                    break;
                case "spotify-this-song":
                    var song = dataArr[1].slice(1,-1);
                    spotifyApp(song);
                    break;
                case "concert-this":
                    var artist = dataArr[1].slice(1,-1);
                    spotifyApp(artist);
                    break;
            }
        }
    });
}

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
    case "concert-this":
        bandsInTownApp(userInput);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("Please type 'node liri.js help' for instructions");
}