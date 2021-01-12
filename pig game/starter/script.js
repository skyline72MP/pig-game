'use strict';
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0; 
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function() {
    //genereta random dice
    if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check if dice is 1;
    if(dice !== 1) {
//add dice to current score
currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;


    } else {
        //next player
switchPlayer();
    }
};
});

btnHold.addEventListener('click', function() {
//add current score to active player score
if(playing) {
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

//
if(scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}

//switch next player
else {
    switchPlayer();
}
}

});

btnNew.addEventListener('click', function() {
//players score back to 0
scores = [0, 0];
currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add('hidden');
playing = true;
document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

});
//new task
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },
};


// const arr = [2, 3, 4];
// const [x, y, z] = arr;

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);

// const nested = [2, 4, [5, 6]];

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours,categories: tags} = restaurant;

// const {menu = [], starterMenu: starters = []} = restaurant;

// let a = 111;
// let b = 999;
// const obj = {a:23, b:7, c:14};
// ({a, b} = obj);

// const {fri} = openingHours;

// const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu1);

//challenge 1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  //reshenie

  const [players1, players2] = game.players;

  const [gk, ...fieldPlayers] = players1;
  
  const allPlayers = [...players1, ...players2];
  
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
  
  const { odds: { team1, x: draw, team2 }, } = game;
  
  function printGoals(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
  };
  console.log(printGoals('Davies', 'Muller'));
  console.log(printGoals(...game.scored));

  team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

