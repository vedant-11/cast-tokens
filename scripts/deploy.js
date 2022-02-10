const main = async () => {
  [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  console.log("Deploying contract with account:", deployer.address);
  console.log("Account balance:", accountBalance.toString());

  const castTestFactory = await ethers.getContractFactory("castTest");
  const castContract = await castTestFactory.deploy();
  await castContract.deployed();

  console.log("Cast test token address:", castContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
