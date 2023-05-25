"use strict"

var gamesApp = gamesApp || {};
gamesApp.Card = (function (tagA) {
    tagA = $(tagA)
    this.image = $(tagA.find("img")[0])
    this.aId = tagA.attr("id");


})

gamesApp.Card.prototype.isBlankOrRevealed = function () {
    // checking that the front is not equal to the back
    return this.image.attr("src") !== gamesApp.cards.defaultSrc;

}

gamesApp.Card.prototype.isEqualLastCard = function (compareImage) {
    // checking that the front is not equal to the back
    return this.aId === compareImage.aId;








}



