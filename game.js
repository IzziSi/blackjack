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
var _rounds = 50;
var createDeck = _numberOfDecks;

//   Players
var players = [{
        name: 'Heuy',
        money: 200,
        card1: '',
        card2: '',
        card1value: '',
        card2value: '',
        card1Suit: '',
        card2Suit: ''
    }, {
        name: 'Dewey',
        money: 200,
        card1: '',
        card2: '',
        card1value: '',
        card2value: '',
        card1Suit: '',
        card2Suit: ''
    }, {
        name: 'Lewey',
        money: 200,
        card1: '',
        card2: '',
        card1value: '',
        card2value: '',
        card1Suit: '',
        card2Suit: ''
    },
    {
        name: 'Scrooge',
        money: 200,
        card1: '',
        card2: '',
        card1value: '',
        card2value: '',
        card1Suit: '',
        card2Suit: ''
    }
];


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
    for (var suit = 0; suit <= 3;suit++) {

        for (var x = 2; x <= 13;x++) {
            if (x <= 9) {
                card = {
                    name: x,
                    suit: suits[suit],
                    value: x,
                    active: true
                };
                cards.push(card);
            } else if (x == 10) {
                card = {
                    name: 'Jack',
                    suit: suits[suit],
                    value: 10,
                    active: true
                };
                cards.push(card);
            } else if (x == 11) {
                card = {
                    name: 'Queen',
                    suit: suits[suit],
                    value: 10,
                    active: true
                };
                cards.push(card);
            } else if (x == 12) {
                card = {
                    name: 'King',
                    suit: suits[suit],
                    value: 10,
                    active: true
                };
                cards.push(card);
            } else if (x == 13) {
                card = {
                    name: 'Ace',
                    suit: suits[suit],
                    value: 11,
                    active: true
                };
                cards.push(card);
            }
        }
        
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
        selectCard = cards[Math.floor(Math.random() * cards.length)];
        selectSecondCard = cards[Math.floor(Math.random() * cards.length)];
        selectCard.active = false;
        selectSecondCard.active = false;
    } else {
        selectCard = cards[Math.floor(Math.random() * cards.length)];
        selectSecondCard = cards[Math.floor(Math.random() * cards.length)];
        selectCard.active = false;
        selectSecondCard.active = false;
    }
}

function dealToDealer() {
    dealCards(dealer.name, dealer.total);
    dealer.card1 = selectCard.name;
    dealer.card2 = selectSecondCard.name;
    dealer.card1value = selectCard.value;
    dealer.card2value = selectSecondCard.value;
    dealer.card1Suit = selectCard.suit;
    dealer.card2Suit = selectSecondCard.suit;
    dealerTotal = selectCard.value + selectSecondCard.value;
}

function dealToPlayers() {
    players.forEach(player => {
        if (player.money < 15) {
            console.log(player.name + " has less than $15 and cannot play.");
        } else {
            selectCard = cards[Math.floor(Math.random() * cards.length)];
            selectSecondCard = cards[Math.floor(Math.random() * cards.length)];
            selectCard.active = false;
            selectSecondCard.active = false;
            player.card2 = selectSecondCard.name;
            player.card1 = selectCard.name;
            player.card1value = selectCard.value;
            player.card2value = selectSecondCard.value;
            player.card1Suit = selectCard.suit;
            player.card2Suit = selectSecondCard.suit;
            player.total = selectCard.value + selectSecondCard.value;
            console.log(player.name + " has a hand of " + player.card1 + " of " + player.card1Suit + " and " + player.card2 + " of " + player.card2Suit + " with a total value of: " + player.total);
        }
    });
}

function evaluateHit() {
    players.forEach(player => {
        while (dealer.card1 <= 9 && player.total <= 11) {
            selectCard = cards[Math.floor(Math.random() * cards.length)];
            player.total = player.total + selectCard.value;
            console.log(player.name + " hit. Dealer deals " + selectCard.name + " of " + selectCard.suit + " totaling " + player.name + " to " + player.total);
        }
    });
}

function evaluateDealerHit() {
    while (dealerTotal < 17) {
        selectCard = cards[Math.floor(Math.random() * cards.length)];
        dealerTotal = dealerTotal + selectCard.value;
        console.log(dealer.name + " hit. Dealer deals " + selectCard.name + " of " + selectCard.suit + " totaling " + dealer.name + " to " + dealerTotal);
    }
}

function evaluateWinningHand() {
    players.forEach(player => {
        if (player.money < 15) {
        } else {
            if (dealerTotal === 21 && player.total === 21) {
                console.log("Push. " + player.name + "gets money back.");
            } else if (dealerTotal === 21 && player.total < 21) {
                if (dealer.card1value === 10 || 11 && dealer.card2value === 10 || 11) {
                    console.log(dealer.name + " has blackjack! " + player.name + " has lost his hand!");
                } else {
                    console.log(dealer.name + " has 21! " + player.name + " has lost his hand!");
                    player.money = player.money - 15;
                }
            } else if (player.total === 21 && dealerTotal < 21) {
                if (player.card1value === 10 || 11 && player.card2value === 10 || 11) {
                    console.log(player.name + " has blackjack! " + dealer.name + " has lost his hand!");
                    player.money = player.money + 15;
                } else {
                    console.log(player.name + " has 21! " + dealer.name + " has lost his hand!");
                    player.money = player.money + 15;
                }
            } else if (player.total > 21) {
                console.log(player.name + " BUST! It's a loss!");
                player.money = player.money - 15;
            } else if (dealerTotal > 21) {
                console.log(dealer.name + " BUST! It's a win!");
                player.money = player.money + 15;
            } else if (player.total > dealerTotal) {
                console.log(player.name + " wins!");
                player.money = player.money + 15;
            } else {
                console.log(dealer.name + " wins! " + player.name + " lost!");
                player.money = player.money - 15;
            }
        }
    });
}

function playersMoneyAfterGame() {
    players.forEach(player => {console.log(player.name + " has $" + player.money + ".");} );
}

function evaluateCards() {
    while (_rounds > 0) {
        dealToDealer();
        console.log(dealer.name + "'s first card is " + dealer.card1 + " of " + dealer.card1Suit + ". ");
        dealToPlayers();
        evaluateHit();
        console.log(dealer.name + "'s second card is " + dealer.card2 + " of " + dealer.card2Suit + " with a total value of: " + dealerTotal);
        evaluateDealerHit();
        evaluateWinningHand();
        playersMoneyAfterGame();
        _rounds--;
        
    }
}
evaluateCards();

