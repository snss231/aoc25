const solve = (lines) => {
    let sum = 0;
    const ranges = lines[0].split(",").map(range => range.split("-"))
    for (const [start, end] of ranges) {
        for (let i = +start; i <= +end; i++) {
            if (isInvalidId(i)) {
                sum += i
            }
        }
    }
    return sum;
}

const isInvalidId = (id) => {
    const s = id.toString()
    if (s.length % 2 != 0) {
        return false;
    }
    return s.substring(0, s.length / 2) === s.substring(s.length / 2);
}

module.exports = solve;