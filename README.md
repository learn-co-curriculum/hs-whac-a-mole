

# Whac A Mole :hammer:

## Objectives

You'll be building a whac-a-mole game, [demo here](http://kthffmn.github.io/whac-a-mole/) today. The HTML and CSS has already been completed for you, so your only job will be to add JavaScript code to two files, `game-functions.js` and `game.js`, found in your `public/javascripts/` folder.

## Instructions
This lab is Jasmine tested so you'll be running `learn` (terminal format) or `learn -b` (HTML format) from the root of the directory to see where your code is at.

The instructions are split into four sections:

1. [Manipulate the DOM](#manipulate-the-dom)
2. [Generate a Random Number](#generate-a-random-number)
3. [Show a New Mole, Hide an Old One](#show-a-new-mole-hide-an-old-one)
4. [Increment the Score](#increment-the-score)

### Manipulate the DOM

* Open up index.html in your browser.
* Open up the JavaScript console in your browser (`command ⌘` + `option` + `J`). The `index.html` page has already loaded jQuery so go ahead and type `$("#mole-num-1").show();` into the console. Notice what happens.
* Now do `$("#mole-num-5").show();`. What do you think will happen? Run the code. Notice that every mole has a number, starting with 1 and ending with 9.
* Let's make the animations look a bit better. The jQuery UI library is also included in this lab, to learn more about it, read about it [here](http://api.jqueryui.com/).
  * Instead of just calling `show` with no arguments, let's call show with two arguments: the effect we want, in this case slide, and an options argument that specifies direction.
  * Type `$("#mole-num-2").show("slide", { direction: 'down' });` into the JS console in your browser. Better, right?
  * You can read up on the show function [here](http://api.jqueryui.com/show).
  * See if you can get the moles to disappear by making them slide down. The syntax will be very similar to the `show` with arguments syntax. For a hint, take a look at [jQuery's hide() function](http://api.jqueryui.com/hide/).

### Generate a Random Number

JavaScript does not have a built out random integer function so you'll be building one out. It will help you choose a new mole to make appear.

Add code to the `randomInt()` function, found in your `game-functions.js` file. This function should accept two arguments, a minimum and a maxium, and return a random number between and including them. We'll be using this function to choose which mole to call on later.

```javascript
randomInt(1,7);
// => 6
randomInt(1,7);
// => 3
randomInt(2,3);
// => 2
randomInt(4,9);
// => 9
```

For a hint about how to accomplish this, take a look at [Mozilla's JS Random Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and a [Stack Overflow post](http://stackoverflow.com/a/1527820/2890716).

This function is the first function tested by the Jasmine suite so go ahead and run `learn` or `learn -b` from your terminal to see if it passes.

### Show a New Mole, Hide an Old One

In the same file, using what you learned in the DOM manipulation section, you'll add code to the `selectMole()` function. This function should do four things:

1. Hide a mole that is visible.
2. Use `randomInt()` to generate a random number between 1 and 9.
3. Add the number that `randomInt()` returns to the string "#mole-num-" to create a selector.
4. Show the mole that matches the selector.

Keep in mind that this function will be just a bit more complex than these four bullet points as you don't want a mole to disappear from hole number one only to reappear in the same hole.

This function is tested by the second and third Jasmine tests so run `learn`/`learn -b` to see where you're at.

### Increment the Score

Every time a user manages to click on a mole before it disappears, you should reward them by incrementing the score by one. We've already create a score variable in game.js to keep track of the score. Now you need to add a click handler for all divs that match the class "mole". Within this click handler, you'll want to hide the mole that was clicked, increment the score and display the update score in the score div.

Hints:
* Think back to the DOM manipulation section if you want to remember how to fetch the value of the score.
* If you have syntax questions about the handler, see [jQuery's on() function](http://api.jquery.com/on/).
* If you have questions about how to change the content of the `#counter` div, look into [jQuery's text() function](http://api.jquery.com/text/).

## Resources
* [Mozilla's JS Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/) - [Random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
* [Stack Overflow](http://stackoverflow.com/) - [Generating random numbers in Javascript in a specific range?](http://stackoverflow.com/a/1527820/2890716)
* [jQuery UI Docs](http://api.jqueryui.com/)- [.show()](http://api.jqueryui.com/show/)
* [jQuery Docs](http://api.jquery.com/) - [.on()](http://api.jquery.com/on/)
* [jQuery Docs](http://api.jquery.com/) - [.text()](http://api.jquery.com/text/)
