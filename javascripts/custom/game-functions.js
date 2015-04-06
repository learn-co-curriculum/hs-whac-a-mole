function randomInt(min,max) {
  // create a range that includes min and max and return a random number from it

}

function selectMole() {
  // here you're going to hide any visible moles

  // select a new mole to visible, making sure it isn't the same as the previous one
  // hint: this is where you'll need to call on your randomInt to get a random mole number

  // and make the new mole visible
}

// the function below is called on game.js and calls on your selectMole() function every second
function play() {
  setInterval(function() {
    selectMole();
  }, 1000);
}
