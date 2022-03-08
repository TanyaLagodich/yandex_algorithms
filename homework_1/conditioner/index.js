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
    if (lines.length === 2) {
        main();
        process.exit(0);
    }
})

const getTemperature = (lines) => {
    const [troom, tcond] = lines[0].split(' ');
    const mode = lines[1];

    if (
        mode == 'auto' ||
        troom < tcond && mode === 'heat' ||
        troom >tcond && mode === 'freeze'
    ) {
        return tcond;
    }
    return troom;
}

const main = () => {
    const result = getTemperature(lines);
  
    console.log(result);
  };