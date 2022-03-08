const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { abi, evm } = require('./compile');

provider = new HDWalletProvider('traffic torch throw excess tobacco fat plate analyst chunk service fabric divorce',
    'https://rinkeby.infura.io/v3/f7756281f2384fa49b24671d60f6ccaa');

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi).deploy({
        data: evm.bytecode.object,
        arguments: ['Hii there!'],
    }).send({
        gas: '1000000',
        from: accounts[0]
    });
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
}

deploy();