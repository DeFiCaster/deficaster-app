// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {DeFiCasterPaymentAgent} from "../src/DeFiCasterPaymentAgent.sol";
import {CompoundPlugin} from "../src/plugins/CompoundPlugin.sol";

contract DeFiCasterPaymentAgentTest is Test {
    DeFiCasterPaymentAgent public agent;
    CompoundPlugin public compundPlugin;

    function setUp() public {
        agent = new DeFiCasterPaymentAgent();
        // base deployment: https://github.com/compound-finance/comet/blob/main/deployments/base/usdc/roots.json
        // address compoundAddress = 0xb125E6687d4313864e53df431d5425969c15Eb2F; // base mainnet
        address compoundAddress = 0xAec1F48e02Cfb822Be958B68C7957156EB3F0b6e; // sepolia
        compundPlugin = new CompoundPlugin(compoundAddress);
        agent.addProduct('compound', compoundAddress);
    }
}
