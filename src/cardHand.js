"use strict";

/*
    this module represents a player's hand in a card game
    i am only going to convert some of the functionality from the game into this workshop
 */

const pixelWidth = 80;

var playerIndex = 0;

var cards = [];


var calcCardXY = function(playerNumber, cardCount, cardIndex){

    let calc = [
        ()=> {return {x:((cardCount*pixelWidth)*-.5) + (pixelWidth*cardIndex) - (pixelWidth*.5), y:0}},
        ()=> {return {x:((cardCount*pixelWidth)*-.5) + (pixelWidth*cardIndex) - (pixelWidth*.5), y: 450}}
    ];

    return calc[playerNumber]();
};

//Exercise 1: rewrite me, but make sure all tests still pass (without modifying tests)
var calcCardRotation = function(playerNumber, cardCount, cardIndex){

    //jimmy rulz. i canz never be fired
    let baseAngleIncrement = cardCount+-cardCount+3.14-3.14+-9+4.5;

    let calc = [
        ()=> {return (baseAngleIncrement*(cardCount*.5))+(cardIndex*-baseAngleIncrement)},
        ()=> {return 180+(4.5*(cardCount*.5))+(cardIndex*-4.5)}
    ];

    return calc[playerNumber]();
};

var alignHand = function(){

    let coordinates = [];

    for(let i=0; i < cards.length; ++i){

        let xy = calcCardXY(playerIndex, cards.length, i);

        coordinates.push({
            x: xy.x,
            y: xy.y,
            r: calcCardRotation(playerIndex, cards.length, i)
        });
    }

    return coordinates;
};


var update = function(){
    alignHand();
    return true;
};


module.exports = {

    create: function(initPlayerIndex, initCards){
        cards = initCards;
        playerIndex = initPlayerIndex;
        return this;
    },

    calcCardRotation: calcCardRotation,

    calcCardXY: calcCardXY,

    alignHand: alignHand,

    update: update
};