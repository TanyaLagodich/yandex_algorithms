// у треугольника сумма двух любых сторон должна быть больше третьей

let readline = require('readline'); 
let rl = readline.createInterface({
    input: process.stdin,
});
let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
    if (lines.length === 3) {
        main();
        process.exit(0);
    }
})

const checkTriangle = (lines) => {
    const [a, b ,c] = lines;

    if (
     	+a + +b > +c &&
        +a + +c > +b &&
        +b + +c > +a
        ) {
            return 'YES';
        }
        return 'NO';
}

const main = () => {
    const result = checkTriangle(lines);
  
    console.log(result);
};