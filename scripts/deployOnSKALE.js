const hre = require("hardhat");

async function main() {


  const HelloSkale = await hre.ethers.getContractFactory("HelloSkale");
  const helloskale = await HelloSkale.deploy();

  await helloskale.deployed();

  console.log("HelloSkale.sol deployed to:", helloskale.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
