var gamesApp = gamesApp || {};
gamesApp.cards = (function () {

    let noOfImages = "";
    let cardBack = "images/back.png";
    let cardBlank = "images/blank.png";
    let cardSrc = "images/card_";

    // preload the images
    let preloadAndStoreImages = () => {
        const numberOfImages = gamesApp.settings.getNumberOfImages();
        let back = new Image();
        back.src = cardBack;
        let blank = new Image();
        blank.src = cardBlank;
        let images = [];

        for (let i = 1; i <= numberOfImages; i++) {

            const frontImage = new Image();
            frontImage.src = cardSrc + i + '.png';
            images.push(frontImage);
        }
        noOfImages = images.length;
        return images;
    };
    //Store Cards
    var storageOfCardsSrc = (images) => {
        let srcs = []
        if (Array.isArray(images)) {
            for (let i in images) {
                srcs.push(images[i].src);
                srcs.push(images[i].src);

            }

        }
        return srcs;
    };



    //Creating the HTML for the Cards
    let cardCopy = {
        createHtmlForCards: () => {
            let preloadedImages = preloadAndStoreImages();
            let cards = storageOfCardsSrc(preloadedImages);

            let html, cardIndex, src, counter, max;
            counter = 1;
            max = 8;

            if (Array.isArray(cards)) {
                html = "<div>"; // first div to hold the image
                while (cards.length > 0) {
                    // random select a card
                    cardIndex = Math.floor(Math.random() * cards.length);
                    src = cards[cardIndex];
                    // remove card from the array
                    cards.splice(cardIndex, 1);
                    // setting Html for the image and link
                    html +=
                        "<a id='" +
                        src +
                        "'href= '#'><img src='" +
                        cardBack +
                        "'alt = ''></a>";
                    //if end clear float
                    if (counter === max) {
                        html += "<p class= 'clear'></p></div><div>";
                        counter = 1;
                    } else {
                        counter++;
                    }
                }
                html += "</div>"; // close last div tag
            }
            return html;
        },

        //Transitions for the Cards when Clicked
        cardFadeFlipping: function (img, src, duration) {
            img.fadeOut(duration, () => {
                img.attr("src", src).fadeIn(duration)
            })
        },
        slideCardFlip: function (img, src, duration) {
            img.slideUp(duration, () => {
                img.attr("src", src).fadeIn(duration)
            })
        }
    };

    //Public Methods and Properties
    let properties = {
        imageCount: {
            get: () => {
                return noOfImages;
            }
        },

        blankCard: {
            get: () => {
                return cardBlank;
            }
        },
        defaultSrc: {
            get: () => {
                return cardBack;
            }
        }
    };

    // setting properties
    return Object.create(cardCopy, properties)
})();

