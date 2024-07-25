require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "44593caf3d58957893e4f3c3da243e974af58c80ff0841abc007710b3506eb12";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
