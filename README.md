

### Iteration 3: The class methods

1. Create logic for the method `shuffleCards()` to shuffle the cards - every time you create a new game, the order of the cards changes. You will only need to change the `cards` property from your object. **Hint:** It would be a good idea to implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). If you struggle on this method, you can skip it for the moment and go back to it later.

2. When a user picks 2 cards, we will need to check if they are the same. Let's create logic for the method `checkIfPair()`, that will receive two parameters, the names of both cards selected by the user (example: `'ironman'` and `'batman'`). The method will add 1 to our `pairsClicked` property, and if the cards are the same also add 1 to `pairsGuessed`. It should return `true` or `false` depending on the result of comparing both cards.

3. Finally, we need to make sure our game ends, and for that, we can add some logic to the `isFinished()` method. Here we need to check if our property `pairsGuessed` has reached *the numbers of pairs the game has*.

### HTML/CSS Interactions

Think about the interactions your user and the game will have: basically, the user will click on elements of the page (cards) and receive some result - whether they guessed the pair or not.

- The first thing that is done for us - each card's information is dynamically filled in the tiles, and the board is pre-filled with cards for us. As we want this behavior to be triggered as soon as the page loads, we need to wrap it under a `DOMContentLoaded` event. This is also already done for us.

```javascript
document.addEventListener("DOMContentLoaded", function(event) { 
  // some code goes here
});
```

- The other important interaction is the click listener. On click on every single card, we can get some information about that specific card. This code snippet, which is also already provided for us, serves for that.

```javascript
document.querySelectorAll('.back').forEach( card => {
  card.onclick = function() {
    // TODO: write some code here
    console.log('Card clicked: ', card);
  };
});
```

To flip a card, there are different possibilities. One them is toggle the classes `front` and `back`, like in the following example:

```html
<!-- Only display the back that is blue -->
<div class= "card" data-card-name="ironman">
  <div class="back" name="ironman.jpg"></div>
  <div class="front" style="background: url(img/ironman.jpg) no-repeat"></div>
</div>

<!-- After flipping (back and front are reverted) -->

<!-- Only display the back that has a ironman background image -->
<div class= "card" data-card-name="ironman">
  <div class="front" name="ironman.jpg"></div>
  <div class="back" style="background: url(img/ironman.jpg) no-repeat"></div>
</div
```

## Extra Resources

- [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

**Happy coding!** :heart: 

