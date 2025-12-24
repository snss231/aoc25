const solve = (lines) => {
    let res = 0;
    for (const line of lines) {
        const parts = line.split(" ");
        const targetRaw = parts[0];
        //console.log(targetRaw.slice(1, targetRaw.length - 1).split().map(c => c))
        const target = targetRaw.slice(1, targetRaw.length - 1).split('').map(c => c === "." ? 0 : 1);
        console.log(target)

        const buttons = parts.slice(1, parts.length - 1).map(button => {
            return button.slice(1, button.length - 1).split(',').map(c => +c)
        });

        res += getMinPresses(target, buttons);
    }
    return res;
}

function getMinPresses(target, buttons) {
    //bfs
    const visited = new Set();
    let frontier = [Array(target.length).fill(0)];
    let presses = 1;
    while (frontier.length) {
        // console.log('visited:')
        // for (const v of visited) {
        //     console.log(v)
        // }
        // console.log('------')
        let nextFrontier = [];
        for (const curr of frontier) {
            //console.log(`curr: ${curr}`)

            visited.add(curr.join(""));
            for (const button of buttons) {
                const next = pressButton(curr, button);
                if (JSON.stringify(next) === JSON.stringify(target)) {
    
                    return presses;
                }
                if (visited.has(next.join(""))) {
                    //console.log('seen')
                    continue;
                }

                nextFrontier.push(next);
                //console.log(nextFrontier)
            }
        }
        //console.log(`nextFrontier: ${nextFrontier}`)
        frontier = nextFrontier;
        presses += 1
    }
}

function pressButton(state, button) {
    const res = state.map(c => c);
    for (const i of button) {
        res[i] = (res[i] === 0 ? 1 : 0)
    }
    return res;
}

module.exports = solve;