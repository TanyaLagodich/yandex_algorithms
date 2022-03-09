let readline = require('readline'); 
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});
rl.prompt();
let lines = [];
rl.on('line', (line) => {
    lines.push(line.trim());
    if (lines.length === 3) {
        main();
        process.exit(0);
    }
})

const solveEquation = (lines) => {
    const [a, b, c] = lines;
    if (+c < 0) {
        return 'NO SOLUTION';
    } else if (
        +a === 0 && +b === 0 && +c === 0 ||
        +a === 0 && c ** 2 === +b
        ) {
        return 'MANY SOLUTIONS';
    } else if ((c ** 2 - b) % a === 0) {
        return (c ** 2 - b) / a;
    } else {
        return 'NO SOLUTION';
    }
}

const main = () => {
    const result = solveEquation(lines);
    console.log(result);
};