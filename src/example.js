const { roll } = require ("./d20");

roll("1d20")
roll("4d6")
roll("2d10+5")
roll("2d8-3")
roll("4d6kh3")
roll("5d20kl3")
roll("3d6kh2+4")



let result = roll("1d20+5");
console.log(result.toString());  // Print: '1d20 (10) + 5 = `15`'
console.log(result.total);       // Print: 15
