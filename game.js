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

function makeDeck() {
    for (var s = 0; s <= 3;) {

        for (var x = 1; x <= 13;) {
            if (x <= 9) {
                card = {
                    name: x,
                    suit: suits[s],
                    value: x,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 10) {
                card = {
                    name: 'Jack',
                    suit: suits[s],
                    value: 10,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 11) {
                card = {
                    name: 'Queen',
                    suit: suits[s],
                    value: 10,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 12) {
                card = {
                    name: 'King',
                    suit: suits[s],
                    value: 10,
                    active: true
                };
                cards.push(card);
                x++;
            } else if (x == 13) {
                card = {
                    name: 'Ace',
                    suit: suits[s],
                    value: 11,
                    active: true
                };
                cards.push(card);
                x++;
            }
        }
        s++;
    }
}


//   Players

var player1 = {
    name: 'Heuy',
    money: 200,
    card1: '',
    card2: ''
};

var player2 = {
    name: 'Dewey',
    money: 200,
    card1: '',
    card2: ''
};

var player3 = {
    name: 'Lewey',
    money: 200,
    card1: '',
    card2: ''
};

var player4 = {
    name: 'Scrooge',
    money: 200,
    card1: '',
    card2: ''
};
var dealer = {
    name: 'Dealer',
    money: null,
    card1: '',
    card2: ''
};

var _numberOfDecks = 1; // 1-8 max
var _rounds = 20;
var createDeck = _numberOfDecks;
var p1Total;
var p2Total;
var p3Total;
var p4Total;
var dealerTotal;

// game

while (createDeck > 0) {
    makeDeck();
    console.log("Creating deck");
    createDeck--;
}
var selectCard = cards[Math.floor(Math.random() * cards.length)];
var selectSecondCard = cards[Math.floor(Math.random() * cards.length)];

function playGame(player, total) {
    console.log(player + " has dealt:");
    if (selectCard.active === true && selectSecondCard.active === true) {
        console.log(selectCard.name + ' ' + selectCard.suit + ' and ' + selectSecondCard.name + ' ' + selectSecondCard.suit);
        selectCard.active = false;
        selectSecondCard.active = false;
        total = selectCard.value + selectSecondCard.value;
        console.log(player + ' has a total of ' + total);
        //edit this to consider dealers hand
        if (total < 16 && dealer.value < 7) {
            onHit(player, total);
        }
    } else {
        selectCard = cards[Math.floor(Math.random() * cards.length)];
        selectSecondCard = cards[Math.floor(Math.random() * cards.length)];
        console.log(selectCard.name + ' ' + selectCard.suit + ' and ' + selectSecondCard.name + ' ' + selectSecondCard.suit);
        selectCard.active = false;
        selectSecondCard.active = false;
        total = selectCard.value + selectSecondCard.value;
        console.log(player + ' has a total of ' + total);
        //edit this to consider dealers hand
        if (total < 16 && dealer.value < 7) {
            onHit(player, total);
        } else {
            console.log(player + ' has decided to stay.');
        }


    }
}
//edit this to consider dealers hand
function onHit(player, total) {
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


/* function evaluateCards(player, playerValue) {
    if (dealer.value && playerValue <= 21) {}
} */

while (_rounds > 0) {
    console.log(playGame(dealer.name, dealer.total));
    console.log(playGame(player1.name, player1.total));
    _rounds--;
}