const solve = (lines) => {
    return lines.reduce((acc, bank) => acc + getLargestPossibleJoltageForBank(bank.split('').map(c => +c)), 0)
}

const getLargestPossibleJoltageForBank = bank => {
    const highest = Math.max(...bank);
    const highestIdx = bank.findIndex(b => b === highest);
    if (highestIdx === bank.length - 1) {
        return Math.max(...bank.slice(0, highestIdx)) * 10 + highest;
    } else {
        return highest * 10 + Math.max(...bank.slice(highestIdx + 1));
    }
}

module.exports = solve;