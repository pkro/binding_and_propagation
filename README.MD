# Planning the application

**Prototypes (classes):**

- Name: **Game**
  - Attrs: Deck: Object, DiscardPile: Object
  - functions: play()

- Name: **DiscardPile**
  - Attrs: Rules: Array, MaxCards: Number
  - functions: cardDragOver()

- Name: **Deck**
  - Attrs: Suits: Array, Vals: Array
  - functions: shuffle(), stack()

- Name: **Card**
  - Attrs: Suit: String, Val: String
  - functions: cardFlip(), cardDrag(), cardDrop() // why redudandant card prefix?


How to take different games into account (flashcards, solitaire, hearts)?

Write classes and pseudocode in main js file

**Avoid polution of the global namespace by using an iife (immediately invoked function expression)**

Choose wether a variable should be accessible as an object property or not (as a variable).
Don't expose something until it's needed

    // suitDiv NOT accessible after initialiszation
    var Card = {
      init: function() {
        var suitDiv = document.createElement("div");
        document.body.appendChild(suitDiv);
      }
    }
    Card.init();

    // suitDiv IS accessible after initialiszation
    var Card = {
      suitDiv: document.createElement("div"),
      init: function() {
        document.body.appendChild(this.suitDiv);
      }
    }
    Card.init();
    Card.suitDiv.className = "spades";

**DOM fragments**

Use fragments (document.createDocumentFragment) to add and manipulate elements before inserting them into the DOM to avoid possible re-rendering.

