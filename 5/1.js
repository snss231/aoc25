const solve = (lines) => {
    // "Sort and sweep"
    var sol = 0;
    const split = lines.indexOf('');
    const [ranges, ids] = [
        lines.slice(0, split)
            .map(range => range.split('-').map(c => +c))
            .toSorted((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]), 
        lines.slice(split + 1)
            .map(c => +c)
            .toSorted((a, b) => a - b)];

    let rangeIdx = 0;
    outer: for (const id of ids) {
        console.log(id);
        if (rangeIdx >= ranges.length) {
            console.log('rangeIdx exceeded')
            break;
        }

        while (!underRange(id, ranges[rangeIdx])) {
            if (rangeIdx >= ranges.length) {
                break;
            }
            if (inRange(id, ranges[rangeIdx])) {
                console.log('is in range ' + ranges[rangeIdx])
                sol++;
                continue outer;
            } 
            console.log('is above range ' + ranges[rangeIdx])
            rangeIdx++;
        }
        console.log('is below range ' + ranges[rangeIdx])
    }
    return sol;
}

const inRange = (id, range) => {
    return id >= range[0] && id <= range[1];
}


const underRange = (id, range) => {
    return id < range[0];
}


module.exports = solve;