"use strict"

var gamesApp = gamesApp || {};

gamesApp.scores = (function () {

    //Get and Store the Scores

    let setHighScore = function (name, score) {
        if (name && name !== "" && !isNaN(score)) {
            localStorage.setItem(name, score);
        }
    };

    let getHighScore = function (name) {
        let score = localStorage.getItem(name) || undefined;
        return parseInt(score);
    };

    //Calculate Clicks vs Successful Clicks

    let selected = 0;
    let correct = 0;

    return {
        selectionAmount: function () {
          return  selected++;
            
        },

        correctAmount: function () {
         return    correct++;
        },
        //Calculate Score Percentage
        finalScore: function () {
            return Math.floor((correct / selected) * 100);
        },
        //Function to confirm when all cards are removed
        allCardsRemoved: function (imgcount) {
            return (correct === imgcount);
        },

        //Compare Score to HighScore
        checkHighScore: function (name, score) {
            if (name && name !== "" && !isNaN(score)) {
                let highScore = getHighScore(name);
                if (isNaN(highScore) || score > highScore) {
                    setHighScore(name, score);
                }
            }
        },



        //Html For Displaying HighScore
        showHighScore: function (name) {
            let details = "";
            if (name !== "") {
                let newHighScore = getHighScore(name);
                if (!isNaN(newHighScore))
                    details = name + "'s High Score: " + newHighScore + "%";

            }
            return details;
        }

    };


})();


