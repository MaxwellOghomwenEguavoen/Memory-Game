"use strict";

var gamesApp = gamesApp || {};
      // getting the player name from the user
gamesApp.settings = {
    getPlayerName: function() {
        return sessionStorage.playerName || "";
    },
       //setting the player name 
    setPlayerName: function(name) {
        console.log(name, sessionStorage)
        sessionStorage.playerName = name;
        console.log(name, sessionStorage)
    },
         // getting the number of images selected by the user
    getNumberOfImages: function() {
        return parseInt(sessionStorage.numImages) ||24;
    },
         // setting the number of images by the user 
    setNumberOfImages: function(number) {
        sessionStorage.numImages = number||  24;
    },

//     localStorage.setItem("score");
//    var score = localStorage.getItem("score");



}