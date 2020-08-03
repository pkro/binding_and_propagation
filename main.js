// Game
//   Info section
//   Deck
//   Discard Pile
//   Rule

// Deck
//   Cards
//   ----
//   shuffle
//   stack

// Card
//   val
//   suit
//   ----
//   flip

// Discard Pile
//   Holders
//   ----
//   accept or reject

// iife to avoid polution of global namespace
(function (window) {
  // Game
  var Game = function (el, option) {
    this.el = document.getElementById(el);

    this.option = option;
    //   Info section
    this.info_div = document.createElement('div');
    this.info_div.id = 'info_div';

    this.deck_div = document.createElement('div');
    this.deck_div.id = 'deck_div';
    this.gameDeck = new Deck(this.deck_div, option);
    this.gameDeck.buildDeck();

    // Discard pile
    // Rules
    this.fragment = document.createDocumentFragment();
    this.fragment.appendChild(this.info_div);
    this.fragment.appendChild(this.info_div);
    this.el.appendChild(this.fragment);
  };

  // Deck
  var Deck = function (deck_div, option) {
    this.deckData = option.data;
    this.buildDeck = function () {
      var fragment = document.createDocumentFragment();
      deck_div.innerHTML = '';
      for (var i = this.deckData.length - 1; i >= 0; i--) {
        var card = new Card();
        card.id = 'card-' + i;
        card.data = this.deckData[i];
        card.buildCard(fragment);
      }
      deck_div.appendChild(fragment);
    };

    // Cards
    //   ----
    //   shuffle
    //   stack
  };

  // Card
  var Card = function (val, suit) {
    this.val = val;
    this.suit = suit;
    this.buildCard = function () {};
    //   val
    //   suit
    //   ----
    //   flip
  };

  // Discard Pile
  var DiscardPile = function () {
    //   Holders
    //   ----
    //   accept or reject
  };

  window.Game = Game;
})(window);
