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
