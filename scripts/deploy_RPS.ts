import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);


  const initialSupply = 100000;

  const RockPaperScissors = await ethers.getContractFactory("RockPaperScissors");
  const token = await RockPaperScissors.deploy(initialSupply);

  await token.deployed();

  const totalSupply = await token.totalSupply()

  const weiAmount = (await deployer.getBalance()).toString();
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  console.log(
    `RPS deployed to ${token.address} with an initialSupply ${totalSupply}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
