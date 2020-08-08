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

**events**

- .on**c**lick: declarative / can be overwritten / no control over event phase
- .addEventListener: multiple events can be added / event phase can be chosen
- event parameter for callback function:
  - e.target: what was actually clicked on
  - e.currentTarget: the element the eventListener was defined on; same as "this" in the event listener function
  - e.currentTarget.className
  - e.currentTarget.classList.toggle("classname"): adds / removes class (toggle)


**this**
- undefined in global "use strict" mode
- called at time of invocation
- when in doubt, log it out
- without use strict:

      function myFunction() {
        console.log('myfunction', this); // regular function call, this = window
      }
      myFunction();
      var Person = function () {
        this.name = 'john';
        this.salary = 10;
        console.log('Person', this); // called in constructor function, this = Person object
      };

      new Person();

      var vip = {
        bonus: function () {
          console.log('vip', this); // called as a method, this = bonus function
        },
        title: myfunction, // "this" is now the vip object and not the window or undefined
      };
      vip.bonus();
      vip.title();

- **with** use strict:

      "use strict";
      function myFunction() {
        console.log('myfunction', this); // regular function call, this = window
      }
      myFunction();
      var Person = function () {
        this.name = 'john';
        this.salary = 10;
        console.log('Person', this); // same as w/o use strict, this = Person object
      };

      new Person();

      var vip = {
        bonus: function () {
          console.log('vip', this); // same as w/o use strict, this = bonus function
        },
        title: myfunction, // same as w/o use strict, "this" is now the vip object
      };
      vip.bonus();
      vip.title();

  
**bind, call, apply**
- bind: binds new this and returns new function
- **a**pply: calls function with new this as first param and assigns arguments from **a**rray
- call: same as apply but with individual arguments

**Drag&Drop**

on the draggable element:

- draggable: true or false 
- ondragstart: allows communication between drag and drop

on the destination:

- ondrop
- ondragover

on drag event:

- e.dataTransfer