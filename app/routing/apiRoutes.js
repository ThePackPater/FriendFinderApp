var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var userData = req.body;
        console.log("New User Added");
        console.log(userData);
        console.log("<-------------------------------------->");
        friends.push(userData);

        for (var i = 0; i < friends.length; i++) {
            console.log("Friend Name: " + friends[i].name);
            console.log("Total Friend Score: " + matchScore);
            var matchScore = friends[i].scores.reduce(function(total, amount) {
                return total + amount;
            });

        }

        // var bestMatch = {
        //     name: "",
        //     photo: "",
        //     matchSum: ""
        // };

    });
};