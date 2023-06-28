import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);


  const initialSupply = 100000;

  const MikhailToken = await ethers.getContractFactory("MikhailToken");
  const token = await MikhailToken.deploy(initialSupply);

  await token.deployed();

  const totalSupply = await token.totalSupply()

  const weiAmount = (await deployer.getBalance()).toString();
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  console.log(
    `MikhailToken deployed to ${token.address} with an initialSupply ${totalSupply}`
  );

  // Transfer tokens

  // const fromWei = ethers.utils.formatEther;
  // const toWei = ethers.utils.parseEther;

  // const address = '0x2c71b99467a07dbc39601fcccea805393cac45e0';
  // const token = await ethers.getContractAt("MikhailToken", address);
  // const accounts = await ethers.getSigners();
  // const owner = accounts[0].address;
  // const toAddress = accounts[1].address;

  // await token.symbol()
  // const totalSupply = await token.totalSupply();
  // fromWei(totalSupply)

  // await token.transfer(toAddress, toWei('10'))

  // const ownerBalance = await token.balanceOf(owner);
  // fromWei(ownerBalance);

  // const toBalance = await token.balanceOf(toAddress);
  // fromWei(toBalance)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
