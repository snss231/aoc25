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
    const s = id.toString();
    const factors = getAllFactors(s.length).filter(f => f <= s.length / 2);

    for (const f of factors) {
        const first = s.substring(0, f);

        let valid = false;
        for (let i = f; i < s.length; i += f) {
            if (s.substring(i, i + f) !== first) {
                valid = true;
                break;
            }
        }
        if (!valid) {
            return true;
        }
    }
    return false;
}

const getAllFactors = n => {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            factors.push(n / i);
        }
    }
    return factors;
}
module.exports = solve;