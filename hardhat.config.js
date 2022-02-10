require("@nomiclabs/hardhat-waffle");

const alchemyKey = "o7JzR-sAztJKdWH5Sk63wPmSVhklHzWg";

const mumbaiPrivateKey =
  "73d93254656026ea321c599c9912f7a56cf81f0a91a702b359783a2715ae9829";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/o7JzR-sAztJKdWH5Sk63wPmSVhklHzWg",
      accounts: [`0x${mumbaiPrivateKey}`],
    },
  },
};
