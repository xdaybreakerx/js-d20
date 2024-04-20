const { rollMultipleDice, sortDiceRolls, calculateDiceRollTotal } = require('../src/d20');  
const { roll } = require('../src/index')

describe('Dice Rolling Functions', () => {
    test('roll function outputs correct total and string format', () => {
        const result = roll("2d6+3");
        expect(result.total).toBeGreaterThanOrEqual(5); // minimum possible roll is 2+3
        expect(result.total).toBeLessThanOrEqual(15); // maximum possible roll is 12+3
        expect(result.toString()).toMatch(/2d6\+\d \(\d+, \d+\) \+\d = `\d+`/);
    });

    test('roll function handles invalid command gracefully', () => {
        const result = roll("invalid");
        expect(result.total).toBeNull();
        expect(result.toString()).toBe("Invalid dice command");
    });

    test('rollMultipleDice returns an array with correct length', () => {
        const rolls = rollMultipleDice(4, 6);
        expect(rolls.length).toBe(4);
        rolls.forEach(roll => {
            expect(roll).toBeGreaterThanOrEqual(1);
            expect(roll).toBeLessThanOrEqual(6);
        });
    });

    test('sortDiceRolls correctly sorts and limits the array', () => {
        const rolls = [3, 1, 4, 2];
        const sorted = sortDiceRolls(rolls, 'kh', 2);
        expect(sorted).toEqual([4, 3]);

        const sortedLow = sortDiceRolls(rolls, 'kl', 2);
        expect(sortedLow).toEqual([1, 2]);
    });

    test('calculateDiceRollTotal correctly calculates total with positive modifier', () => {
        const rolls = [3, 4];
        const total = calculateDiceRollTotal(rolls, 2);
        expect(total).toBe(9);
    });

    test('calculateDiceRollTotal correctly calculates total with negative modifier', () => {
        const rolls = [3, 4];
        const total = calculateDiceRollTotal(rolls, -1);
        expect(total).toBe(6);
    });
});

