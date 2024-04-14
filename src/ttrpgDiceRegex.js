// Constructing the regex for dice notation
const diceRegex = /(\d+)?d(\d+)((kh(\d+)|kl(\d+))?|k|p|rr|ro|ra|e|mi\d+|ma\d+)([\+\-]\d+)?/;

/*
Explanation of the regex components:
- (\d+)?d(\d+): Matches the number of dice and the type of dice (e.g., 2d10)
    - (\d+)? - Optional number of dice, defaults to 1 if not specified
    - d - Literal character 'd' standing for "dice"
    - (\d+) - Required, type of dice (number of sides)
- ((kh(\d+)|kl(\d+))?|k|p|rr|ro|ra|e|mi\d+|ma\d+): Matches various dice roll modifiers
    - (kh(\d+)|kl(\d+))? - Optional "keep highest" or "keep lowest" followed by number
    - k - Keep all matched values
    - p - Drop all matched values
    - rr - Reroll all matched values until none match
    - ro - Reroll all matched values once
    - ra - Reroll and add
    - e - Explode on (roll another die for each matched value)
    - mi\d+ - Minimum value each die can have, followed by number
    - ma\d+ - Maximum value each die can have, followed by number
- ([\+\-]\d+)? - Optional modifier to add or subtract from the total roll (e.g., +2 or -3)
*/

// Example use of the regex:
const tests = [
    "2d10mi3",
    "4d6rr",
    "1d12+2ro",
    "3d8k",
    "5d20ma18"
];

tests.forEach(test => {
    console.log(`${test}: `, diceRegex.test(test) ? "Matches" : "Does not match");
});



//
//
//
//

const diceRegex2 = /(\d+)?d(\d+)((kh(\d+)|kl(\d+))?|k|p|rr|ro|ra|e|mi\d+|ma\d+)([\+\-]\d+)?/;

const testStrings = [
    "4d6kh3",
    "2d6ro<3",
    "8d6mi2",
    "(1d4 + 1, 3, 2d6kl1)kh1"
];

testStrings.forEach(str => {
    console.log(`${str}: `, diceRegex.test(str) ? "Matches" : "Does not match");
});
