import sdk from "./1-initialize-sdk.js";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {

    const editionDrop = await sdk.getContract(process.env.EDITION_DROP_ADDRESS, "edition-drop");

    const token = await sdk.getContract(process.env.TOKEN_ADDRESS, "token");

    const walletAddresses = process.env.MEMBERS.split(',');

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
      );
      process.exit(0);
    }


    const airdropTargets = walletAddresses.map((address) => {

      //const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      const randomAmount = 100000;
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();
