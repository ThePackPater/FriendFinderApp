// `apiRoutes.js` file contains two routes:
var friends = require("../data/friends.js");
//var getFriends = require("../data/friends");

// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            quote: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userQuote = userData.quote;
        var userScores = userData.scores;

        var b = userScores.map(function(item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            quote: req.body.quote,
            photo: req.body.photo,
            scores: b
        };
        console.log("Name: " + userName);
        console.log("Quote: " + userQuote);

        var sum = b.reduce((a, b) => a + b, 0);
        console.log("User score " + sum);
        console.log("Best Match friend diff " + bestMatch.friendDifference);
        console.log("***************************************************");

        for (var i = 0; i < friends.length; i++) {
            console.log(friend[i].name);
            totalDifference = 0;
            console.log("Total Difference :" + totalDifference);
            console.log("Best Match Friend Difference: " + bestMatch.friendDifference);
            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total Friend Score: " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("--------------------------------> " + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.quote = friends[i].quote;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }

            console.log(totalDifference + " Total Difference");
        }
        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(bestMatch);
    });
};