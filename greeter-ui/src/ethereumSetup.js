import Web3 from "web3";

const web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(web3Provider);

// truffle console> var instance = await Greeter.deployed();
// instance.abi
let greeterABI = [{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xfaf27bca"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcfae3217"}];

// instance.address
let greeterAddress = "0x18C8E1F8758B7492d6D55303DB446ad43FcdbACF";

const greeterContract = new web3.eth.Contract(
  greeterABI,
  greeterAddress
);

export {
  greeterContract
}
