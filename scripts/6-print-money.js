import sdk from "./1-initialize-sdk.js";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const token = await sdk.getContract(process.env.TOKEN_ADDRESS, "token");
    const amount = 100000000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log("✅ There now is", totalSupply.displayValue, "$KATANA in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();