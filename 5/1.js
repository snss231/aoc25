const solve = (lines) => {
    let res = 0;
    const _ = lines.indexOf('');
    const ranges = lines
        .slice(0, _)
        .map(line => line
            .split('-')
            .map(c => +c))
        .toSorted((a, b) => a[0] - b[0]);
    const ids = lines.slice(_ + 1)
        .map(c => +c)
        .toSorted((a, b) => a - b);
    const rangeIterator = ranges[Symbol.iterator]();
    let range = rangeIterator.next().value;
    for (const id of ids) {
        console.log(id);
        while (range && overRange(id, range)) {
            //console.log('is under range ' + range);
            range = rangeIterator.next();
            range = range && range.value
        }
        if (!range) {
            break;
        }
        if (underRange(id, range)) {
            //console.log('is over range ' + range);
            continue;
        }
        //console.log('is in range ' + range);
        res++;
    }
    return res;
}

const overRange = (id, range) => id > range[1];

const underRange = (id, range) => id < range[0];

const inRange = (id, range) => id >= range[0] && id <= range[1];

module.exports = solve;