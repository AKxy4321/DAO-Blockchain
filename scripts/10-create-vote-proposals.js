import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const vote = await sdk.getContract(process.env.VOTE_ADDRESS, "vote");
    const token = await sdk.getContract(process.env.TOKEN_ADDRESS, "token");
    const amount = 420_000;
    const description = "Should the DAO mint an additional " + amount + " tokens into the treasury?";
    const executions = [
      {
        toAddress: token.getAddress(),
        nativeTokenValue: 0,
        transactionData: token.encoder.encode(
          "mintTo", [
          vote.getAddress(),
          ethers.utils.parseUnits(amount.toString(), 18),
        ]
        ),
      }
    ];

    await vote.propose(description, executions);

    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }

  try {
    const vote = await sdk.getContract(process.env.VOTE_ADDRESS, "vote");
    const token = await sdk.getContract(process.env.TOKEN_ADDRESS, "token");
    const amount = 5200;
    const description = "Should the DAO transfer " + amount + " tokens from the treasury to " +
    '0x75b697Ea096148e4419585191EF9F2BBAC9BBae0' + " for being awesome?";
    const executions = [
      {
        nativeTokenValue: 0,
        transactionData: token.encoder.encode(
          "transfer",
          [
            '0x75b697Ea096148e4419585191EF9F2BBAC9BBae0',
            ethers.utils.parseUnits(amount.toString(), 18),
          ]
        ),
        toAddress: token.getAddress(),
      },
    ];

    await vote.propose(description, executions);

    console.log(
      "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
    );
  } catch (error) {
    console.error("failed to create second proposal", error);
  }
})();