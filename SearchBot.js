console.log('Search Bot Start.......');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var params = { 
    q: 'polo',
    count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    /*console.log(data); */
    var tweets = data.statuses;
    for (var i = 0; i < tweets.lenght; i++){
     console.log(tweets[i].text);
    }
}