# ethereum-dapp-hello-world

- Hello World equivalent of an ethereum smart contract

## Technology

Build using:

- truffle
- ganache
- React

## Pre-requisites

Assumption: Mac development environment, or similar.

```
npm install -g truffle ganache-cli
```

## Tutorial Outline

There are two parts to the repository:

- *greeter* - a smart contract
- *greeter-ui* - a React front-end

First, we deploy the smart contract. Run a test network:

```
ganache-cli
```

From `greeter`, build and deploy the smart contract:

```
truffle compile
truffle migrate
```

Next, lets interact with the smart contract to set its hello world message:

```
λ truffle console
truffle(development)> var instance = await Greeter.deployed();
truffle(development)> instance.address
'0xF1a0908A989151A9De4e58Eb1D9F47fbCF721f9d'
truffle(development)> instance.greeter("Hello, world. I'm a smart contract");
truffle(development)> instance.greet();
"Hello, world. I'm a smart contract"
```

From the `greeter-ui` directory, we can get a user interface for
the smart contract.

We need to configure the react app with the correct address for the
contract. Edit `greeter-contract.js` and set the contract address
that was output in the `instance.address` response in truffle console.

Now start the application:

```
npm run start
```
