# ethGreeterApp

- built during Ethereum Development Course - Blockchain at Berkeley



run test network:
```
ganache-cli
```


```
truffle compile
truffle migrate
```

Note:

```
contract address:    0x7b8A699e7cf4EBF6324a514155e23F518C312c81
```

interact:

```
λ truffle console
truffle(development)> var instance;
truffle(development)> Greeter.deployed().then(x => { instance = x; });
truffle(development)> instance.greeter("init");
truffle(development)> instance.greet();
```

```
var instance = await Greeter.deployed();

instance.greeter("Well, I'm baked in stone");
instance.greet();
```