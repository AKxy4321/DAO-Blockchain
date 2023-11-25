const Web3 = require('web3');

const provider = new Web3.providers.HttpProvider('https://mumbai.polygonscan.com/');
const web3 = new Web3(provider);

const contractAddress = '0x8ed15E768DF13eD6808dc1220Bc94b11bFaC31f9';
const abi = [ /* YOUR_CONTRACT_ABI */ ];

const contract = new web3.eth.Contract(abi, contractAddress);

const claimEvents = await contract.events.Claim({ fromBlock: '0', toBlock: 'latest' });

const claimers = [];

for (const event of claimEvents) {
  const claimer = event.args.claimer;
  claimers.push(claimer);
}

console.log(claimers);