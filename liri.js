require("dotenv").config();
var inquirer = require("inquirer");
var request = require("request");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

function runProgram() {
  var input = process.argv[3]
  if (process.argv[2] === "movie-this") {
    ombd(input);
  }

  if (process.argv[2] === "my-tweets") {
    twitter(input);
  }
  if (process.argv[2] === "spotify-this-song") {
    muzik(input);
  }
}

//twitter function
function twitter(screenName) {
  var client = new Twitter({
    consumer_key: "KSRVxN58CVOuICI2z1vpVrIJn",
    consumer_secret: "HfQ4gM27i5ovpCx2pbvGFZ33NgLormzNoWGNYbdkQ0N1G0NEUs",
    access_token_key: "1016831759122665473-40BNAzQQJrwwdLi7Fj0c2s6zDmd574",
    access_token_secret: "mI3oFPIAswenxx7bn2UG5efbJYu6qCy847EfE8MA0ixzs"
  });

  var params = { screen_name: !screenName ? "Justane56100469" : screenName, count: 20 };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
      }
    }
  });
}

//OMBD movie db function
function ombd(movieName) {

  request(
    "http://www.omdbapi.com/?t="+ movieName +"&y=&plot=short&apikey=trilogy",
    function(error, response, body) {
      // Then run a request to the OMDB API with the movie specified

      var queryUrl =
        "http://www.omdbapi.com/?t=" +
        movieName +
        "&y=&plot=short&apikey=trilogy";

      console.log(JSON.parse(body).Title);
      console.log(JSON.parse(body).Rated);
      console.log(JSON.parse(body).Year);
      console.log(JSON.parse(body).Genre);
      console.log(JSON.parse(body).Director);
      console.log("---------------");
    }
  );
}

//SPOTIFY function 

function muzik(title) {
  var spotify = new Spotify({
    id: "315ee638818643dda9d659471a852f78",
    secret: "07735ab4760c4c458a7dbb205c564052"
  });

  spotify.search({ type: "track", query: title }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log("-------------");
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].artists[0].name);
    console.log(data.tracks.items[0].album.release_date);
    console.log(data.tracks.items[0].album.name);
    console.log(data.tracks.items[0].album.external_urls.spotify);
    console.log("-------------");
  });
}

runProgram();
