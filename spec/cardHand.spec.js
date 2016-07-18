"use strict";

var cardHand = require("../src/cardHand");

describe("cardHand", function(){

    /*
     NOT value add test:
     because the name is one word, very poorly described test
     another "no value add" test would be something unreadable/difficult to read (too many mocks or global dependencies)
     */
    it("runs", function(){
        var hand = cardHand.create(0, ['a','b','c']);
        expect(hand.update()).toBeTruthy();
    });


    /*
     better than nothing:
     has a decent description, but in general, "no throw" checks are free when you write better tests
     */
    it("does not crash when updated", function(){
        var hand = cardHand.create(0, ['a','b','c']);
        expect(hand.update).not.toThrow();
    });

    //the above two tests are both nebulous and do not tell a newbie to your application what to expect when calling


    /*
        adequate:
        this test has too much going on. it is ideal to have only one assertion per test for absolute clarity
    */
    xit("when being updated, implements the alignHand method and does not crash", function(){

        var hand = cardHand.create(0, ['a']);

        spyOn(hand, 'alignHand');

        hand.update();

        expect(hand.alignHand).toHaveBeenCalled();
        expect(hand.update).not.toThrow();
    });
});


/*
    best:
    one assert per test
    human readable
    terse and accurate
 */

describe("the cardHand module", function(){

    describe("given that playerIndex is zero(0)", function(){

        var hand = {};

        describe("when computing card rotation for 5 cards", function(){

            beforeEach(function(){
                hand = cardHand.create(0, ['a', 'b', 'c', 'd', 'e']);
            });

            it("then the first card has an 11.25 degree offset", function(){
                let firstCard = hand.calcCardRotation(0, 5, 0);
                expect(Math.abs(firstCard)).toEqual(11.25);
            });

            it("then the cards have a 4.5 degree difference between neighboring cards", function(){
                let firstCard = hand.calcCardRotation(0, 5, 0);
                let nextCard = hand.calcCardRotation(0, 5, 1);

                let distance = Math.abs(firstCard -nextCard);

                expect(distance).toEqual(distance);
            });

            it("then the index minimum(0)/maximum(5) absolute value is equal", function(){

                let firstCard = hand.calcCardRotation(0, 5, 0);
                let lastCard = hand.calcCardRotation(0, 5, 5);

                expect(Math.abs(firstCard)).toEqual(Math.abs(lastCard));
            });
        });

        describe("when computing card position for 5 cards", function(){
            /*
                Exercise 2:
                write tests for func cardhand.calcCardXY
            */
            xit("needs tests", function(){expect(1).toBe(0);});
        });
    });

    //bonus passes for Exercise 1:
    describe("given that the playerIndex is one(1)", function(){

        var hand = {};

        describe("when computing card rotation for 5 cards", function(){

            beforeEach(function(){
                hand = cardHand.create(1, ['a', 'b', 'c', 'd', 'e']);
            });

            it("then all cards have an 180 degree offset", function(){
                expect(hand.calcCardRotation(1, 5, 0) - 11.25).toEqual(180);
            });

            it("then the first card has an 11.25 degree offset", function(){
                let firstCard = hand.calcCardRotation(0, 5, 0);
                expect(Math.abs(firstCard)).toEqual(11.25);
            });

            it("then the cards have a 4.5 degree difference between neighboring cards", function(){
                let firstCard = hand.calcCardRotation(1, 5, 0);
                let nextCard = hand.calcCardRotation(1, 5, 1);

                let distance = Math.abs(firstCard -nextCard);

                expect(distance).toEqual(distance);
            });

            //broken test
            xit("then the index minimum(0)/maximum(5) absolute value is equal", function(){

                let firstCard = hand.calcCardRotation(1, 5, 0);
                let lastCard = hand.calcCardRotation(1, 5, 5);

                let firstOffset = Math.abs(firstCard) - 180;
                let lastOffset = Math.abs(lastCard) - 180;

                expect(firstOffset).toEqual(lastOffset);
            });
        });
    });
});



