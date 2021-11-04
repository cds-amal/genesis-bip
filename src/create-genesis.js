const { mnemonicToSeedSync } = require("bip39");
const { hdkey } = require("ethereumjs-wallet");
const genesisTemplate = require("./genesis");

const makeGenesis = ({ 
  accounts,
  chainId,
  fund,
  mnemonic
}) => {

  const seed = mnemonicToSeedSync(mnemonic)
  const masterWallet = hdkey.fromMasterSeed(seed)
  const derivationPath = "m/44'/60'/0'/0/"

  const pairGenerator = (index=0) => 
    () => masterWallet.derivePath(derivationPath + index++).getWallet();

  const nextPair = pairGenerator(0);

  const alloc = {};
  for (let i=0; i<accounts; i++) {
    alloc[nextPair().getChecksumAddressString()] = { balance: fund.toString() };
  }

  const config = { ...genesisTemplate.config, chainId };
  const genesis = { ...genesisTemplate, alloc, config };
  console.log(JSON.stringify(genesis, null, 2));
}


module.exports = makeGenesis;
