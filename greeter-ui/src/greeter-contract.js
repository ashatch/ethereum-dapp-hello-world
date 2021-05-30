import Web3 from "web3";

const web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(web3Provider);

// truffle console> var instance = await Greeter.deployed();
// instance.abi
let greeterABI = [{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xfaf27bca"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcfae3217"}];

// instance.address
let greeterAddress = "0xF1a0908A989151A9De4e58Eb1D9F47fbCF721f9d";

const greeterContract = new web3.eth.Contract(
  greeterABI,
  greeterAddress
);

export {
  greeterContract
}
