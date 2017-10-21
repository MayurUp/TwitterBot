console.log('Replies Bot Start');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
    //var fs = require('fs');
    //var json = JSON.stringify(eventMsg,null,2);
    //fs.writeFile("tweet.json", json);

    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;

    console.log(replyto + ' ' + from);

    if (replyto === 'MayurGu07070953'){
        var newtweet = '@' + from + ' Namo Thanks for sharing visit Lapolo.in for more update on this!' ;
        tweetIt(newtweet);
    }
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
            console.log('something went wrong!');
        }
            else {
            console.log('It worked!');
        }
    }
}