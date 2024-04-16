
/**
 * Generates a random dice roll for the given number of sides
 * @date 2024-04-16 22:52:34
 * @author Xander
 *
 * @param {*} numberOfSides The number of sides on the dice
 * @returns {*} Returns a random integer between 1 and the specified number of sides, inclusive.
 */
function rollDice(numberOfSides) {
  // Returns a random integer between 1 and numberOfSides, inclusive
  return Math.floor(Math.random() * numberOfSides) + 1;
}



/**
 * Rolls the specified number of dice with the given number of sides
 * @date 2024-04-16 23:04:39
 * @author Xander
 *
 * @param {*} numberOfDice The number of dice to roll
 * @param {*} numberOfSides The number of sides on each die
 * @returns {{}} Rolls the specified number of dice with the given number of sides and returns an array of the rolled values
 */

function rollMultipleDice(numberOfDice, numberOfSides) {
  let rolls = [];
  for (let i = 0; i < numberOfDice; i++) {
      rolls.push(rollDice(numberOfSides));
  }
  return rolls;
}

function parseAndExecuteDiceCommand(command) {
  // Regex to parse the dice command
  const diceRegex = /(\d+)?d(\d+)(kh\d+|kl\d+)?([\+\-]\d+)?/;

  /*
  Breakdown of the regex components:
  - (\d+)?d(\d+): Captures dice roll commands
    - (\d+)? - Optional number capturing the number of dice to be rolled (default is 1 if not specified)
    - d - Literal character indicating the start of the dice type specification (e.g., d20 means a twenty-sided die)
    - (\d+) - Mandatory number capturing the type of dice (i.e., the number of sides on the dice)

  - (kh\d+|kl\d+)? - Optional group for "keep highest" or "keep lowest" modifiers
    - kh\d+ - "Keep highest" command followed by a number specifying how many of the highest rolls to keep
    - kl\d+ - "Keep lowest" command followed by a number specifying how many of the lowest rolls to keep


  - ([\+\-]\d+)? - Optional group capturing arithmetic modifiers to apply to the total roll
    - [\+\-] - A plus or minus sign indicating addition or subtraction
    - \d+ - A number specifying how much to add or subtract from the dice roll total
  */
  const matches = command.match(regex);

  if (!matches) {
      return "Invalid dice command";
  }

  const numberOfDice = parseInt(matches[1]) || 1;
  const numberOfSides = parseInt(matches[2]);
  const checkAdvantageOrDisadvantage = matches[3] ? matches[3].substring(0, 2) : null;
  const keepHighestOrLower = parseInt(matches[4]) || 0;
  const rollModifier = parseInt(matches[6]) || 0;

}


