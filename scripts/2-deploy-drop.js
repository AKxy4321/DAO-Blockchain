import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "DemonSlayerDAO Membership",
      description: "A DAO for Demon Slayer Fans",
      image: readFileSync("scripts/assets/DemonSlayer.png"),
      primary_sale_recipient: process.env.WALLET_ADDRESS,
      platform_fee_basis_points: 1000,
      platform_fee_recipient: process.env.WALLET_ADDRESS,
    });

    const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");

    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();