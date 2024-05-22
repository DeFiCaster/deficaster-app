// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import "../src/DeFiCasterPaymentAgent.sol";
import "../src/plugins/CompoundPlugin.sol";


contract DeFiCasterPaymentAgentScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        DeFiCasterPaymentAgent agent = new DeFiCasterPaymentAgent();
        // address compoundAddress = 0xb125E6687d4313864e53df431d5425969c15Eb2F; // base mainnet
        address compoundAddress = 0xAec1F48e02Cfb822Be958B68C7957156EB3F0b6e; // sepolia
        CompoundPlugin compundPlugin = new CompoundPlugin(compoundAddress);
        agent.addProduct('compound', address(compundPlugin));
        vm.stopBroadcast();
    }
}
