const { rollDice } = require("./gpt-d20");

console.log(rollDice("2d20kh1"));  // Advantage
console.log(rollDice("2d20kl1"));  // Disadvantage
console.log(rollDice("1d20"));     // Regular roll
console.log(rollDice("d20"));      // Regular roll
console.log(rollDice("1d6+10"));   // Regular roll with addition
console.log(rollDice("1d6-3"));    // Regular roll with subtraction

console.log(rollDice("2d20", true));  // Verbose mode
console.log(rollDice("1d6+10", true));
console.log(rollDice("1d6-3", true));