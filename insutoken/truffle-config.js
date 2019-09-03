const WalletProvider = require("truffle-hdwallet-provider");
var ropstenPrivateKeys = ["FEA15719068E39C6318847645988A4D90CD0A5E0F0DCB149DB27A6E6A44559D6"];
var ropstenProvider = new WalletProvider(ropstenPrivateKeys, "https://ropsten.infura.io/v3/b99d1b21cb344e379219ae24ee59e223");

module.exports = {

  networks: {

    development: {
     host: "127.0.0.1",    
     port: 8545,           
     network_id: "*", 
    },
    ropsten: {
      provider: ropstenProvider,
      gas: 4600000,
      gasPrice: 20000000000,
      network_id: "3",
    }
  },

  mocha: {

  },


  compilers: {
    solc: {
      version: "0.4.24",
      
    }
  }
}
