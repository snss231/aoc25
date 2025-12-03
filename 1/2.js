const solve = (lines) => {

    let pos = 50;
    let password = 0;

    lines.forEach(line => {
        const direction = line.charAt(0); 
        const distance = +line.slice(1);
        if (!["L", "R"].find(d => d === direction)) {
            throw new Error(`Unknown direction ${direction}`)
        }
        
        let times = 0;
        if (direction === "R") {
            pos += distance 
        } else if (direction === "L") {
            if (pos === 0) {
                times -= 1 // will be added back later
            }
            pos -= distance
        }
        if (pos === 0) {
            times += 1
        }
        if (pos < 0) {
            times += -Math.ceil(pos / 100) + 1
         } else {
            times += Math.floor(pos/100)
         }
        password += times

        pos = pos % 100
        if (pos < 0) {
            pos += 100
        }
        //console.log(`${pos}, ${times}`)
    });

    return password;
}

module.exports = solve;