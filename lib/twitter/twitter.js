var util = require('util');
var twitter = require('twitter');

var Server = function() {
  this.twit = new twitter({
    consumer_key: 'kgh7DTQ5P0l1UIn8PV8uA',
    consumer_secret: 'hb5tOX6gGZlIhPb1QDe9YfmtTtLdAZCT51pjsVhXE',
    access_token_key: '109349635-C62XiorXKv5AAhAHjMpBKZOMeRJsMW5cFyEGMa5C',
    access_token_secret: 'cSLdJkinQBo0KYcjoKKHeADdaziPbOctbABpe4qslf2b5'
  });
};

Server.prototype.listen = function(callback) {
  this.twit.stream('statuses/sample', callback);
};

exports.createServer = function() {
  return new Server();
};