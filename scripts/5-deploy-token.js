import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const tokenAddress = await sdk.deployer.deployToken({
      name: "DemonSlayerDAO Governance Token",
      symbol: "Katana",
      primary_sale_recipient: process.env.WALLET_ADDRESS,
      platform_fee_basis_points: 1000,
      platform_fee_recipient: process.env.WALLET_ADDRESS,
    });
    console.log(
      "✅ Successfully deployed token contract, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token contract", error);
  }
})();