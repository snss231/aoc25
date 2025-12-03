const solve = (lines) => {

    let pos = 50;
    let password = 0;

    lines.forEach(line => {
        const direction = line.charAt(0); 
        const distance = +line.slice(1);
        if (direction == "R") {
            pos += distance
        } else if (direction == "L") {
            pos -= distance
        } else {
            throw new Error(`Unknown direction ${direction}`)
        }
        if (pos % 100 === 0) {
            password++;
        }
    });

    return password;
}

module.exports = solve;