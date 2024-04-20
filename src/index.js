// Import helper functions from the diceFunctions module
const { rollDice, rollMultipleDice, sortDiceRolls, calculateDiceRollTotal } = require('./d20');

// Public API function

/**
 * Roll the dice!
 * @date 2024-04-16 23:26:23
 * @author Xander
 *
 * @param {string} diceString A string that represents a dice command, following the specified regex pattern.
 * @returns {object} An object containing the total of the dice roll and a string representing the detailed result.
 */
function roll(diceString) {
    // Regex to parse the dice command
    const diceRegex = /(\d+)?d(\d+)(kh\d+|kl\d+)?([\+\-]\d+)?/;
  
    /*
    * Breakdown of the regex components:
    * - (\d+)?d(\d+): Captures dice roll commands
    *   - (\d+)? - Optional number capturing the number of dice to be rolled (default is 1 if not specified)
    *   - d - Literal character indicating the start of the dice type specification (e.g., d20 means a twenty-sided die)
    *   - (\d+) - Mandatory number capturing the type of dice (i.e., the number of sides on the dice)
    *
    * - (kh\d+|kl\d+)? - Optional group for "keep highest" or "keep lowest" modifiers
    *   - kh\d+ - "Keep highest" command followed by a number specifying how many of the highest rolls to keep
    *   - kl\d+ - "Keep lowest" command followed by a number specifying how many of the lowest rolls to keep
    *
    * - ([\+\-]\d+)? - Optional group capturing arithmetic modifiers to apply to the total roll
    *   - [\+\-] - A plus or minus sign indicating addition or subtraction
    *   - \d+ - A number specifying how much to add or subtract from the dice roll total
    */
   
    const matches = diceString.match(diceRegex);
  
    if (!matches) {
        console.error("Invalid dice command:", diceString);
        return { total: null, toString: () => "Invalid dice command" };
    }
  
    const numberOfDice = parseInt(matches[1]) || 1;
    const numberOfSides = parseInt(matches[2]);
    const keepPreference = matches[3] ? matches[3].substring(0, 2) : null;
    const numberOfKeeps = parseInt(matches[3] ? matches[3].slice(2) : 0) || 0;
    const adjustment = parseInt(matches[4]) || 0;
  
    // Roll the dice based on the parsed command
    let diceRolls = rollMultipleDice(numberOfDice, numberOfSides);
  
    // Sort and possibly reduce the number of dice based on keep preferences
    let relevantRolls = sortDiceRolls(diceRolls, keepPreference, numberOfKeeps);
  
    // Calculate the total of the relevant dice rolls including any modifiers
    let finalResult = calculateDiceRollTotal(relevantRolls, adjustment);
  
    // Construct the detailed result string
    let resultString = `${diceString} (${relevantRolls.join(", ")})`;
    if (adjustment !== 0) {
        resultString += ` ${adjustment >= 0 ? '+' : ''}${adjustment}`;
    }
    resultString += ` = \`${finalResult}\``;
  
    // Log the detailed results for debugging and verification
    console.log(`Result: ${resultString}`);
    return { total: finalResult, toString: () => resultString };
  }

// Exporting public functions
module.exports = {
    roll
};