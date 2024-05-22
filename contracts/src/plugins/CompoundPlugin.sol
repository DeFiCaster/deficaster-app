// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ISpendable} from "../interfaces/ISpendable.sol";
import {IERC20} from "../interfaces/IERC20.sol";
import {Comet} from "../interfaces/IComet.sol";

/**
 *
 * Mint cToken and send it back to the user
 * Todo:: add support to Permit2
 * Todo:: Add whitelist tokens to enhance the security
 */
contract CompoundPlugin is ISpendable {
    /// @notice The Comet contract
    Comet public immutable comet;

    constructor(address _cometAddress) {
        comet = Comet(_cometAddress);
    }

    function productName() external pure returns (string memory) {
        return "compound";
    }

    /**
     *  Todo:: check supply from function
     */
    function spend(address user, address token, uint256 amount) external returns (bool) {
        // To operate supply from, please ensure the user have given the permission to this cont
        comet.supplyFrom(user, user, token, amount);
        return true;
    }

    // function spendWithSig(address user, address token, uint256 amount, bytes memory signature) external returns (bool) {
    //     IERC20(token).transferFrom(user, address(this), amount);
    //     comet.supplyFrom(user, user, token, amount);
    //     return true;
    // }
}
