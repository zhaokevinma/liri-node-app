// To import the keys.js and store it in a variable
var keys = require("./keys.js");

// To import Axios npm package
var axios = require("axios");

// Function to search movie and display according info in command prompt
function movieApp(userInput) {
    var movie = userInput;
    if (!movie) {
        console.log("Check out Good Boys if you haven't seen it yet!");
        movie = "Good+Boys";
    } else {
        var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey="+keys.omdb.id;
        axios.get(url).then(
            function (response) {
                console.log("--------------------------\n");
                console.log("Movie Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("\n--------------------------\n");
            }
        )
    };
};

// To export the movieApp function 
module.exports = movieApp;