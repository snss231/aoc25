const solve = (lines) => {
    let res = 0;
    const ranges = lines
        .slice(0, lines.indexOf(''))
        .map(line => line
            .split('-')
            .map(c => +c))
        .toSorted((a, b) => a[0] - b[0]);
    const mergedRanges = [];

    let [start, end] = ranges[0];

    for (const [s, e] of ranges.slice(1)) {
        console.log(s, e, end)
        if (s <= end) {
            end = Math.max(e, end);
            continue;
        } 
        mergedRanges.push([start, end])
        start = s;
        end = e;
    }
    mergedRanges.push([start, end])
    console.log(mergedRanges)
    for (const [start, end] of mergedRanges) {
        res += (end - start + 1);
    }
    return res;
}


module.exports = solve;