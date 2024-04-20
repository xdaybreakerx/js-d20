# Dice Roller for RPG Games

## Introduction
This Dice Roller provides a comprehensive set of tools to simulate dice rolls as part of tabletop RPG games like Dungeons & Dragons. It includes functionality to roll any number of dice with any number of sides, apply modifiers, and optionally keep the highest or lowest rolls. It is based on, and uses the same syntax as the Avrae D20 module for Python. 

## Features
- Roll any number of dice with any specified number of sides.
- Apply arithmetic modifiers to the sum of dice rolls.
- Keep only the highest or lowest results from the rolls.
- Detailed and customizable logging for debugging or game tracking.

## Installation

This module is easy to install via npm:

```bash
npm install js-d20
```

## Usage
To use this library, first import the functions you need from the package:
```js
const { roll } = require('js-d20');
``` 

Then, you can use the roll function to execute dice rolls:
```js
let result = roll("2d10+5");
console.log(result.toString()); // Outputs: 2d20 (4, 8) +5 = `17`
console.log(result.total()); // Outputs: 17
```
Or
```js
roll("d20-2"); // Outputs: Result: d20 (16) -2 = `14`
```

## Example Dice Roll Strings

- **Single Die Roll**: `1d20` - Rolls one 20-sided die.
- **Multiple Dice Roll**: `4d6` - Rolls four 6-sided dice.
- **Add Modifier**: `2d10+5` - Rolls two 10-sided dice and adds 5 to the total.
- **Subtract Modifier**: `2d8-3` - Rolls two 8-sided dice and subtracts 3 from the total.
- **Keep Highest**: `4d6kh3` - Rolls four 6-sided dice and keeps the highest three rolls.
- **Keep Lowest**: `5d20kl3` - Rolls five 20-sided dice and keeps the lowest three rolls.
- **Combined Modifiers**: `3d6kh2+4` - Rolls three 6-sided dice, keeps the highest two rolls, and adds 4 to the total.

## License:
This project is licensed under MIT License.

