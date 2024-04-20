const { roll } = require ("./d20");

roll("1d20")
roll("2d20kh1")
roll("d20")
roll("1d6+10")
roll("1d6-3")

let result = roll("1d20+5");
console.log(result.toString());  // Print: '1d20 (10) + 5 = `15`'
console.log(result.total);       // Print: 15
