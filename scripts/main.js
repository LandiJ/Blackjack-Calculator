/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

var total = 0;
var aces = [];

function handValue(hand) {
  total = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] > 1 && hand[i] <= 10) {
      total += Number(hand[i]);
    }
    if (hand[i] == "J" || hand[i] == "Q" || hand[i] == "K") {
      total += 10;
    } else if (hand[i] == "A") {
      aces.push(hand[i]);
    }
  }
  for (var i = 0; i < aces.length; i++) {
    if (hand[i] == "A" && total < 10) {
      total += 11;
    } else if (hand[i] == "A" && total > 10) {
      total += 1;
    }
  }
  return total;
}

console.log(handValue(["A"]));
console.log(handValue(["8", "A", "J"]));

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
