const { version } = require("chai");

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('hardhat-deploy');

/** @type import('hardhat/config').HardhatUserConfig */
const SEPHOLIA_RPC_URL = process.env.SEPHOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  // solidity: "0.8.8",
  solidity:{
    compilers:[{version:"0.8.8"},{version:"0.6.6"}]
  },
  networks: {
    sepholia: {
      url: SEPHOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      deploy: [ 'deploy/' ],
      companionNetworks: {
        l1: 'sepholia',
      }
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // no need for account
      chainId: 31337,
      deploy: [ 'deploy/' ],
      companionNetworks: {
        l2: 'localhost',
      }
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    // L1: "polygon",
    outputJSONFile: "gasReport",
    outputFile: "gasReport.txt",
    noColors: false,
    coinmarketcap: process.env.COINMARKETCAP_API,
  },
};
