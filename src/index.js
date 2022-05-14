const { docopt } = require("docopt");
const { makeGenesisJson, makePairs } = require("./create-genesis");

const doc = `
Usage:
  geth-gen genesis [ options ]
  geth-gen pairs [ options ]
  geth-gen -h | --help | --version

Options:
  -h --help                  Show this screen
  -m --mnemonic=<mnemonic>   Pass mnemonic [default: -]
  -c --chain-id=<chain-id>   ChainID [default: 1337]
  -a --accounts=<accounts>   Number of accounts to fund [default: 10]
  -f --fund=<fund>           Initial funds [default: 100000000000000000000]
`

const args = docopt(doc, { version: '0.0.1-alpha.1' });

const options = {
  accounts: parseInt(args["--accounts"], 10),
  mnemonic: args["--mnemonic"] === "-" ? "" : args["--mnemonic"],
  chainId: parseInt(args["--chain-id"], 10),
  fund: args["--fund"],
  pairs: args.pairs,
  genesis: args.genesis
};

if (options.pairs) {
  makePairs(options);
} else if (options.genesis) {
  makeGenesisJson(options);
} else {
  console.log('Unknown command!');
}

