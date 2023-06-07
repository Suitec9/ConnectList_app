require("dotenv").config({ path: ".env" });
const { ethers } = require("hardhat");

async function main() {
  
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsTokenContract here is a factory for instances of our Connectlist contract.
  */
  const ConnectlistContract = await ethers.getContractFactory(
    "Connectlist"
  );

  // deploy the contract
  const deployedConnectlistContract = await ConnectlistContract.deploy(100);
    // 100 is the Maximum number for whitelisted addresses allowed


    // Wait for it to finish deploying
    await deployedConnectlistContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Connectlist Contract",
    deployedConnectlistContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
