import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.EDITION_DROP_ADDRESS, "edition-drop");

    const claimConditions = [{
      startTime: new Date(),
      maxClaimable: 50_000,
      price: 0,
      maxClaimablePerWallet: 1,
      waitInSeconds: MaxUint256,   //ppl can claim only once
    }]

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();