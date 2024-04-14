// Define the regular expression for D&D 5e dice operations
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

// Array of test strings representing different typical D&D dice commands
const tests = [
    "d20",         // Roll one 20-sided die
    "2d10",        // Roll two 10-sided dice
    "4d6kh3",      // Roll four 6-sided dice and keep the highest three rolls
    "3d8kl1",      // Roll three 8-sided dice and keep the lowest one roll
    "1d12+2",      // Roll one 12-sided die and add 2 to the total
    "2d4-1"        // Roll two 4-sided dice and subtract 1 from the total
];

// Iterate through each test string and check if it matches the regex
tests.forEach(test => {
    console.log(`${test}: `, diceRegex.test(test) ? "Matches" : "Does not match");
    // Outputs whether each test case matches the regex pattern, helping to verify the regex functionality
});
