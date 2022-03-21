"use strict"


const path = require('path');
const fs = require('fs');
const solc = require('solc')

const scPath = path.resolve(__dirname, 'contracts', 'Lottery.sol')
console.log(scPath)
const source = fs.readFileSync(scPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Lottery.sol'
].Lottery;
