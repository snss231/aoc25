const solve = (lines) => {
    return lines.reduce((acc, bank) => {
        const largestJoltage = getLargestPossibleJoltageForBank(bank.split('').map(c => +c), 12)
        return acc + largestJoltage
    }, 0)
}

const getLargestPossibleJoltageForBank = (bank, batteries) => {
    if (batteries <= 0) {
        return 0;
    }
    
    //console.log(bank, batteries)
    const highest = Math.max(...bank);

    // we want highest as far up as possible (fit as many batteries after as possible)
    const highestIdx = bank.findIndex(b => b === highest);
    const batteriesAfter = Math.min(bank.length - highestIdx - 1, batteries - 1);

    return highest * 10 ** batteriesAfter 
        + getLargestPossibleJoltageForBank(bank.slice(highestIdx + 1), batteriesAfter) 
        + getLargestPossibleJoltageForBank(bank.slice(0, highestIdx), batteries - 1 - batteriesAfter) * 10 ** (batteriesAfter + 1)
}

module.exports = solve;