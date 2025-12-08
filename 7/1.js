const solve = (lines) => {
    let beams = lineToBitString(lines[0]);
    printBitString(beams)
    let splits = 0n;
    for (const line of lines.slice(1)) {
        printBitString(beams)
        const splitters = lineToBitString(line);
        splits += countBits(beams & splitters);
        beams = splitBeams(beams, splitters);
    }
    return splits;
}

const lineToBitString = line => {
    let bs = 0n;
    for (const c of line.split('').reverse()) {
        bs = bs << 1n;
        bs = bs | (c === '.' ? 0n : 1n);
    }
    return bs;
}

const printBitString = num => {
    let res = [];
    while (num > 0) {
        res.push((num & 1n) === 0 ? '.' : '|');
        num >>= 1n;
    }
    return res.reverse();
}

const splitBeams = (beams, splitters) => {
    let resultingBeams = beams;
    resultingBeams &= ~splitters;
    resultingBeams |= splitters << 1n;
    resultingBeams |= splitters >> 1n;
    return resultingBeams;
}

const countBits = num => {
    let count = 0n;
    while (num > 0n) {
        count += (num & 1n);
        num >>= 1n;
    }
    return count;
}
module.exports = solve;