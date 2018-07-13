require("dotenv").config();
//inquirer

// Make it so liri.js can take in one of the following commands:
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// * `my-tweets`




// var request = require("request");
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {


// Grab or assemble the movie name and store it in a variable called "movieName"
// var movieName = "";
// ...


// Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// * `movie-this`

// * `do-what-it-says`

//TWITTER//////////////////////////
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'KSRVxN58CVOuICI2z1vpVrIJn',
  consumer_secret: 'HfQ4gM27i5ovpCx2pbvGFZ33NgLormzNoWGNYbdkQ0N1G0NEUs',
  access_token_key: '1016831759122665473-40BNAzQQJrwwdLi7Fj0c2s6zDmd574',
  access_token_secret: 'mI3oFPIAswenxx7bn2UG5efbJYu6qCy847EfE8MA0ixzs'
});
 
var params = {screen_name: 'Justane56100469', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(tweets);
for (let i = 0; i < tweets.length; i++) {
  console.log(tweets[i].text)
}
  }
});

//OMBD///////////////////////////

// Take a move with multiple words (ex: Forrest Gump) as a Node argument
// var movieName = "";
// for(var i = 2; i < process.argv.length; i++){
//     movieName += process.argv[i];
//     delim = "+"
// }
// Include the request npm package 
// var request = require("request");
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

// Then run a request to the OMDB API with the movie specified

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console.log(JSON.parse(body).Title);

//SPOTIFY/////////////////////////

// * `spotify-this-song`
// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);


// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
//  });
