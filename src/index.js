const fs = require("fs");
const path = require("path");
const { mnemonicToSeedSync } = require("bip39");
const { hdkey } = require("ethereumjs-wallet");
const genesisTemplate = require("./genesis");

const mnemonic = "tilt syrup park comic decorate pill multiply boil mistake velvet property type";

const seed = mnemonicToSeedSync(mnemonic)
const masterWallet = hdkey.fromMasterSeed(seed)
const derivationPath = "m/44'/60'/0'/0/"

const pairGenerator = (index=0) => 
  () => masterWallet.derivePath(derivationPath + index++).getWallet();

const nextPair = pairGenerator(0);

const alloc = {};
const fund = 1e20;
for (let i=0; i<10; i++) {
  alloc[nextPair().pair.getChecksumAddressString()] = { balance: fund.toString() };
}

const genesis = {...genesisTemplate, alloc}
fs.writeFileSync(
  path.join(__dirname, "genesis.json"),
  JSON.stringify(genesis, null, 2)
);



