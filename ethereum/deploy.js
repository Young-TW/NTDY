const { ethers } = require("hardhat");

async function main() {
    const NTDYYoungCoin = await ethers.getContractFactory("NTDYYoungCoin");
    const ntdyYoungCoin = await NTDYYoungCoin.deploy();
    await ntdyYoungCoin.deployed();

    console.log("NTDYYoungCoin deployed to:", ntdyYoungCoin.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
