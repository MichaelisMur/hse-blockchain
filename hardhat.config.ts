require("@nomiclabs/hardhat-waffle");
// require('@openzeppelin/hardhat-upgrades');
// Any file that has require('dotenv').config() statement 
// will automatically load any variables in the root's .env file.
// require('dotenv').config();
 
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/d53842fdd1c14964aecacdf0a986b983",
      accounts: [
        `0xdfab5357da22651514ba271f2c51f05e5708be8436ac197ed839ea940ccd09f3`,
        `0a02afddb4229ac80d41568a3f8c3ddcac361f672976370e8d8dc2485305db89`          
      ]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/d53842fdd1c14964aecacdf0a986b983",
      accounts: [
        `0xdfab5357da22651514ba271f2c51f05e5708be8436ac197ed839ea940ccd09f3`,
        `0a02afddb4229ac80d41568a3f8c3ddcac361f672976370e8d8dc2485305db89`          
      ]
    }
  }
};