function rollDice(diceNotation, verbose = false) {
    let rolls, dice, modifierFunc, modifierVal, number = 0, operator = null;
    
    // Check if notation includes '+' or '-'
    if (diceNotation.includes('+')) {
        [diceNotation, number] = diceNotation.split('+');
        operator = 'add';
        number = parseInt(number, 10);
    } else if (diceNotation.includes('-')) {
        [diceNotation, number] = diceNotation.split('-');
        operator = 'subtract';
        number = parseInt(number, 10);
    }

    // Parse dice notation
    if (diceNotation.includes('d')) {
        [rolls, dice] = diceNotation.split('d');
        rolls = rolls || 1;
    } else {
        dice = diceNotation;
        rolls = 1;
    }

    // Check for modifiers
    if (dice.includes('kh')) {
        [dice, modifierVal] = dice.split('kh');
        modifierFunc = 'keepHighest';
    } else if (dice.includes('kl')) {
        [dice, modifierVal] = dice.split('kl');
        modifierFunc = 'keepLowest';
    }

    // Roll the dice
    let rollValues = [];
    for(let i = 0; i < rolls; i++) {
        rollValues.push(Math.floor(Math.random() * dice) + 1);
    }

    // Apply modifiers
    if (modifierFunc) {
        rollValues.sort((a, b) => b - a);
        if (modifierFunc === 'keepHighest') {
            rollValues = rollValues.slice(0, modifierVal);
        } else if (modifierFunc === 'keepLowest') {
            rollValues = rollValues.slice(-modifierVal);
        }
    }

    // Calculate total to return
    let total = operator ? (operator === 'add' ? rollValues.reduce((a, b) => a + b, 0) + number : rollValues.reduce((a, b) => a + b, 0) - number) : rollValues.reduce((a, b) => a + b, 0);

    // If verbose mode is enabled, return a string instead of a number
    if (verbose) {
        let resultString = rollValues.join(' + ');
        if (operator) {
            resultString += ` ${operator === 'add' ? '+' : '-'} ${number} = ${total}`;
        } else {
            resultString += ` = ${total}`;
        }
        return resultString;
    }

    return total;
}

module.exports = {
    rollDice
}