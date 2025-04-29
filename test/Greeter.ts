import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", () => {
  async function deployFixture() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hi!");
    await greeter.waitForDeployment();
    return { greeter };
  }

  it("returns the deployed greeting", async () => {
    const { greeter } = await loadFixture(deployFixture);
    expect(await greeter.greet()).to.equal("Hi!");
  });

  it("updates the greeting", async () => {
    const { greeter } = await loadFixture(deployFixture);
    await greeter.setGreeting("Hola!");
    expect(await greeter.greet()).to.equal("Hola!");
  });
});
