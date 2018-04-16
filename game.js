// The Duck Tales guys are going to the casino and 
// they want to simulate 20 games of black jack.  Each
// players starts with 200 dollars.  Each game is $15.  If
// they lose all their money they can no longer play.  Simulate
// the outcome.  At the end output the player and how much
// they each won / lost.


// RULES
// Number of Decks between 1-8
// Dealer Hits on 16 and Below
// 


//deck and cards

var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cards = [];
var card;
var _numberOfDecks = 1; // 1-8 max
var _rounds = 20;
var createDeck = _numberOfDecks;

//   Players

var player1 = {
    name: 'Heuy',
    money: 200,
    card1: '',
    card2: '',
    card1value: '',
    card2value: '',
    card1Suit: '',
    card2Suit: ''
};

var player2 = {
    name: 'Dewey',
    money: 200,
    card1: '',
    card2: '',
    card1value: '',
    card2value: '',
    card1Suit: '',
    card2Suit: ''
};

var player3 = {
    name: 'Lewey',
    money: 200,
    card1: '',
    card2: '',
    card1value: '',
    card2value: '',
    card1Suit: '',
    card2Suit: ''
};

var player4 = {
name: 'Scrooge',
money: 200,
card1: '',
card2: '',
    card1value: '',
    card2value: '',
    card1Suit: '',
    card2Suit: ''
};
var dealer = {
    name: 'Dealer',
    money: null,
    card1: '',
    card2: '',
    card1value: '',
    card2value: '',
    card1Suit: '',
    card2Suit: ''
};

var p1Total;
var p2Total;
var p3Total;
var p4Total;
var dealerTotal;


function makeDeck() {
    for (var suit = 0; suit <= 3;) {

        for (var x = 1; x <= 13;) {
            if (x <= 9) {
                card = {
                    name: x,
                    suit: suits[suit],
                    value: x,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 10) {
                card = {
                    name: 'Jack',
                    suit: suits[suit],
                    value: 10,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 11) {
                card = {
                    name: 'Queen',
                    suit: suits[suit],
                    value: 10,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 12) {
                card = {
                    name: 'King',
                    suit: suits[suit],
                    value: 10,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 13) {
                card = {
                    name: 'Ace',
                    suit: suits[suit],
                    value: 11,
                    active: true
                };
                cards.push(card);
                x++;
            }
        }
        suit++;
    }
}




// game

while (createDeck > 0) {
    makeDeck();
    console.log("Creating deck");
    createDeck--;
}
var selectCard = cards[Math.floor(Math.random() * cards.length)];
var selectSecondCard = cards[Math.floor(Math.random() * cards.length)];

function dealCards(player, total) {
    if (selectCard.active === true && selectSecondCard.active === true) {
        selectCard.active = false;
        selectSecondCard.active = false;
    } else {
        selectCard = cards[Math.floor(Math.random() * cards.length)];
        selectSecondCard = cards[Math.floor(Math.random() * cards.length)];
        selectCard.active = false;
        selectSecondCard.active = false;
    }
}

//edit this to consider dealers hand
/* function onHit(player, total) {
    if (selectCard.active === true) {
        selectCard = cards[Math.floor(Math.random() * cards.length)];
        console.log(player + ' hits, drawing ' + selectCard.name + ' ' + selectCard.suit);
        selectCard.active = false;
        selectSecondCard.active = false;
        total = selectCard.value + total;
        console.log(player + "'s new total is: " + total);
    } else {
        selectCard = cards[Math.floor(Math.random() * cards.length)];
        console.log(player + ' hits, drawing ' + selectCard.name + ' ' + selectCard.suit);
        selectCard.active = false;
        selectSecondCard.active = false;
        total = selectCard.value + total;
        console.log(player + "'s new total is: " + total);
    }
}
 */

function evaluateCards() {
    while (_rounds > 0) {
        dealCards(dealer.name, dealer.total);
        dealer.card1 = selectCard.name;
        dealer.card2 = selectSecondCard.name;
        dealer.card1value = selectCard.value;
        dealer.card2value = selectSecondCard.value;
        dealer.card1Suit = selectCard.suit;
        dealer.card2Suit = selectSecondCard.suit;
        dealerTotal = selectCard.value+ selectSecondCard.value; 
        console.log(dealCards(player1.name, p1Total));
        p1Total = selectCard.value+ selectSecondCard.value;
        player1.card2 = selectSecondCard.name;
        player1.card1 = selectCard.name;
        player1.card1value = selectCard.value;
        player1.card2value = selectSecondCard.value;
        player1.card1Suit = selectCard.suit;
        player1.card2Suit = selectSecondCard.suit;
        p1Total = selectCard.value+ selectSecondCard.value; 
        console.log(dealer.name + "'s first card is " + dealer.card1 + " of " + dealer.card1Suit +  ". " + player1.name + " has a hand of " + player1.card1 +  " of " + player1.card1Suit +  " and " + player1.card2 +  " of " + player1.card2Suit +  " with a total value of: " + p1Total);
             _rounds--;
    }
}

evaluateCards();