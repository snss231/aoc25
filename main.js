#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// --- Parse command line arguments ---
const [, , day, part, ...flags] = process.argv;

if (!day || !part) {
  console.error("Usage: node run.js <day> <part> (--example-only)");
  process.exit(1);
}

const solutionPath = path.join(day, `${part}.js`);

let solve;
try {
  solve = require('./' + solutionPath);
} catch (err) {
  console.error(`Could not load solution at ${solutionPath}`);
  console.error(err.message);
  process.exit(1);
}

console.log(`Day ${day}, part ${part}`)

for (const file of ['example', 'input']) {
  if (flags.includes('--example-only') && file === 'input') {
    continue;
  }
  const input = fs.readFileSync(path.join(day, `${file}.txt`), 'utf8');
  const solution = solve(input.split("\n").map(line => line.trim()))
  console.log(`${file} solution: ${solution}`)
}
