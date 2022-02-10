require("@nomiclabs/hardhat-waffle");

const alchemyKey = "";

const mumbaiPrivateKey =
  "";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "",
      accounts: [`0x${mumbaiPrivateKey}`],
    },
  },
};
