const solve = (lines) => {
    let beams = [...lines[0]].map(c => c === '.' ? 0 : 1);
    for (const line of lines.slice(1)) {
        let nextBeam = beams.map(_ => 0);
        for (const [i, b] of beams.entries()) {
            if (line[i] === '^') {
                nextBeam[i - 1] += b;
                nextBeam[i + 1] += b;
            } else {
                nextBeam[i] += b;
            }
        }
        beams = nextBeam;
    }
    return beams.reduce((acc, curr) => curr + acc);
}

module.exports = solve;