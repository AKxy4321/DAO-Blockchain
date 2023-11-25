import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const quickNodeApiUrl = process.env.QUICKNODE_API_URL;
const thirdwebApiKey = process.env.THIRWEBSDK_API_KEY;

if (!privateKey || privateKey === "") {
  console.log("🛑 Private key not found.");
  process.exit(1);
}

if (!quickNodeApiUrl || quickNodeApiUrl === "") {
  console.log("🛑 QuickNode API URL not found.");
  process.exit(1);
}

const sdk = ThirdwebSDK.fromPrivateKey(privateKey, quickNodeApiUrl, {clientId: '3239e8289710b41fdda572169e41d3ff', secretKey: thirdwebApiKey});

(async () => {
  try {
    const address = await sdk.getSigner().getAddress();
    console.log("👋 SDK initialized by address:", address);
  } catch (err) {
    console.error("Failed to initialize the SDK", err);
    process.exit(1);
  }
})();

export default sdk;