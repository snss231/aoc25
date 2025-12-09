const solve = (lines) => {
    // naive n^2 approach
    let largest = 0;
    const points = lines.map(line => {
        const [x, y] = line.split(',');
        return {
            x: +x,
            y: +y
        };
    });

    for (const [i, a] of points.entries()) {
        for (const b of points.slice(i + 1)) {
            largest = Math.max(largest, getArea(a, b));
        }
    }
    return largest;
}

const getArea = (a, b) => {
    return (Math.abs(a.x - b.x) + 1) * (Math.abs(a.y - b.y) + 1);
}

module.exports = solve;