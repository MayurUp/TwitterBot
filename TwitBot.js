console.log('Twit Bot Start');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*20)

function tweetIt(txt){

    var r = Math.floor(Math.random()*100);

    var tweet = {
        status: 'Random' + r + ' #Good_Afternoon!'
    }
    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err){
            console.log("something went wrong!");
        }
            else {
            console.log("It worked!");
        }
    }
}