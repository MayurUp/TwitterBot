console.log('Follow Bot Start');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows
stream.on('follow', followed);

function followed(eventMsg){
    console.log("Follow event!");
    var name = eventMsg.source.name;
    var screen_Name = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + 'I Got You')
}

//tweetIt();
//setInterval(tweetIt, 1000*20)

function tweetIt(txt){

    //var r = Math.floor(Math.random()*100);

    var tweet = {
        status: txt 
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