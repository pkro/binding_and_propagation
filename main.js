func = new $f();
func.hello();
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
  const Game = function (el, option) {
    this.el = document.getElementById(el);

    this.option = option;
    //   Info section
    this.info_div = createDiv('info_div');

    this.deck_div = createDiv('deck_div');
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
  const Deck = function (deck_div, option) {
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
  const Card = function (val, suit) {
    this.id = '';
    this.data = '';
    this.cardCont = createDiv('card_container');
    this.cardFront = createDiv('card_front');
    this.cardBack = document.createElement('div');
    this.cardBack.className = 'card_back';
    this.buildCard = function () {
      const flipDiv = createDiv('flip'),
        frontValDiv = createDiv('front_val'),
        backValDiv = createDiv('back_val'),
        catDiv = createDiv('cat_val');
    };

    //   val

    //   suit
    //   ----
    //   flip
  };

  // Discard Pile
  const DiscardPile = function () {
    //   Holders
    //   ----
    //   accept or reject
  };

  window.Game = Game;
})(window);
