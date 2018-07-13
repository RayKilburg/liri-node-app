console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEYKSRVxN58CVOuICI2z1vpVrIJn,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRETHfQ4gM27i5ovpCx2pbvGFZ33NgLormzNoWGNYbdkQ0N1G0NEUs,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY101683175912266547340BNAzQQJrwwdLi7Fj0c2s6zDmd574,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRETmI3oFPIAswenxx7bn2UG5efbJYu6qCy847EfE8MA0ixzs
};

exports.spotify = {
  id: process.env.SPOTIFY_ID315ee638818643dda9d659471a852f78,
  secret: process.env.SPOTIFY_SECRET07735ab4760c4c458a7dbb205c564052
};

//You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);