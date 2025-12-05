let grid = [];
let rolls = [];

const solve = (lines) => {
    for (const line of lines) {
        grid.push(line.split(''));
    }

    let accessible = 0;
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] === "@") {
                if (isAccessible(i, j)) {
                    grid[j][i] = '.';
                    accessible++;
                } else {
                    rolls.push([i, j]);
                }
            }
        }
    }
    
    while (true) {

        const failed = [];
        let anyProcessed = false;
        while (rolls.length) {
            const [i, j] = rolls.pop();
            if (isAccessible(i, j)) {
                grid[j][i] = '.';
                accessible++;
                anyProcessed = true;
            } else {
                failed.push([i, j])
            }
        }

        if (!anyProcessed) {
            break;
        }
        rolls = failed;
    }

    grid = [];
    rolls = [];
    return accessible;
}

const directions = [
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1]
];

const isAccessible = (i, j) => {
    let rolls = 0;
    for (const [di, dj] of directions) {
        const next = [i + di, j + dj]
        if (next[0] < 0 || next[1] < 0 || next[0] >= grid[0].length || next[1] >= grid.length) {
            continue;
        }
        if (grid[next[1]][next[0]] === "@") {
            rolls++;
        }
    }
    return rolls < 4;
}

module.exports = solve;