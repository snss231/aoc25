const solve = (lines) => {
    const connections = +lines[0];
    const circuits = (new Array(lines.length - 1)).map((e, index) => new Set([index]))
    console.log(connections);
    
}

module.exports = solve;