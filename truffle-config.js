const config = require("./config.json");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: config.ganacheHost,
      port: config.ganachePort,
      network_id: config.ganacheNetworkId,
    },

    live: {
      provider: () =>
        new HDWalletProvider(config.deployerPrivatekey, config.liveHost),
      network_id: config.liveNetworkId,
    },
  },

  contracts_directory: "./contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "0.8.13",
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
};
