Generate a genesis.json or account pairs.

```console
$ node src -h
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

╭─amal@falafel  ~/.scratch/2021/11/02/geth ‹node-16.15.0› ‹ruby-3.0.0› ‹› (master*)
╰─$ node src pairs -a 2 -m "ab cd ef"
[
  {
    "index": 0,
    "public": "0x8cc733632A330c928cf50173f816fe18935bF752",
    "private": "0x1de6d32b2e6e0027d275d22ce2289d17fd0be24115f22eb11d2cf6102e2e8d97"
  },
  {
    "index": 1,
    "public": "0xc028E9F4762F8Bc313eF2b93E5A5018DAb87F691",
    "private": "0x338d33157278a48f95d796141f903147489a9853cbed96485f966c168a20a28e"
  }
]
```
