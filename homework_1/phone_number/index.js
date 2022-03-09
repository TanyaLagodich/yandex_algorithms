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
    if (lines.length === 4) {
        main();
        process.exit(0);
    }
})

const checkPhoneNumber = (lines) => {
    let newNumber = lines[0].replace('+7', '8').replace(/[^\d;]/g, '');
    if (newNumber.length < 11) {
        newNumber = `8495${newNumber}`;
    }
    const oldNumbers = lines.slice(1);
    let results = [];
    for (let i = 0; i < oldNumbers.length; i++) {
        let number = oldNumbers[i].replace('+7', '8').replace(/[^\d;]/g, '');
        if (number.length === 7) {
            number = `8495${number}`;
        }
        if (newNumber === number) {
            results.push('YES');
        } else {
            results.push('NO');
        }
    }
    return results;
}

const main = () => {
    const results = checkPhoneNumber(lines);
    results.forEach((result) => {
        console.log(result);
    })
};