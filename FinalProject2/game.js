"use strict"

$(document).ready(() => {
  let cards = gamesApp.cards
  
   let settings= gamesApp.settings; 
   let scores = gamesApp.scores;
  
   $("#tabs").tabs();
   
    let name = ""
 let numberOfcards = "";
 let percent= "";

  let  lastCard;
  let  isFirst = true;
  
    
    
    $("#cards").html(cards.createHtmlForCards());
    // console.log(cards.createHtmlForCards());
    

  
    name = settings. getPlayerName();
    numberOfcards = settings.getNumberOfImages();
    $("#player_name").val(name);
    $("#num_cards").val(parseInt(numberOfcards) * 2);

    // display players name beside new game
    if (name !== ""){
        $("#player").text("player: " + name);
    }

    // display highscore
    
    // $("#high_score").text(scores.showHighScore(name));
    
    //add click for each card

    //reset the app to start new game

    $("#new_game").click(function (){
        sessionStorage.clear();
    })


    $("#cards").find("a").each(function(){
        $(this).click(function(evt){
             
            evt.preventDefault();
            // console.log(this);

        // passing clicked <a> to card constructor  
       var currentCard = new gamesApp.Card(this);
             
       
        // dont do anything if the card is blank or already revealed 
       if (currentCard.isBlankOrRevealed())
       {
        return;}

         // fadding the image from the default image to the image in the id
         // a attribute of the <a>
       cards.cardFadeFlipping(currentCard.image, currentCard.aId, 500);

       // checking if itsfirst is true, if that is the case the clicked card is the clicked card of the turn
       // first card of the turn , store clicked <a> and setting to false
       if(isFirst){
           lastCard = currentCard;
           isFirst = false;
       }else{    // clicked card is second card of the turn
        // update count 
          scores.selectionAmount();
          // if current card equals last card 
          if (currentCard.isEqualLastCard(lastCard)){
            // update count
            scores.correctAmount();
            // slide both child img tags to blank after 1 seconds
            setTimeout(function(){
                console.log(currentCard.image, cards.cardBlank)
                cards.slideCardFlip(currentCard.image, cards.blankCard, 500);
                 cards.slideCardFlip(lastCard.image, cards.blankCard, 500);
                
               
                 
            }, 1000 );
           
            $("#correct").text("Correct: " + scores.finalScore() + "%");
            // $("#high_score").text("High Score: " + scores.finalScore()  + percent);
           
        }else{
            setTimeout(function(){ 
                cards.cardFadeFlipping(currentCard.image, cards.defaultSrc, 500);
                cards.cardFadeFlipping(lastCard.image, cards.defaultSrc, 500);
            }, 1000);

          }
             isFirst = true;
          
       }
       if ( scores.allCardsRemoved(cards.imageCount) ) {
        setTimeout(function(){ 
                $("#high_score").text("High Score: " + scores.finalScore()  + percent);
        }, 1500)};
      //    cards.slideCardFlip(currentCard.image, cards.blankCard, 500);
    //              cards.slideCardFlip(lastCard.image, cards.blankCard, 500);
// if all images have been correctly selected, calculate percent 
                    // and display after 1.5 seconds 
});
    });
        // save setting click function
    $("#save_settings").click(function(){
        settings.setPlayerName($("#player_name").val());
        settings.setNumberOfImages(parseInt($("#num_cards").val() )/2)

        location.reload();
        
    });
   
});


// if all images have been correctly selected, calculate percent 
                    // and display after 1.5 seconds 
                  