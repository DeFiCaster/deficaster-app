// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface ISpendable {
    /**
     * @dev Should return product name to be used
     */
    function productName() external pure returns (string memory);

    /**
     * @dev Should return whether the signature provided is valid for the provided data
     * @param token     Token address to be spent
     * @param amount    Token amount to be spent
     */
    function spend(address user, address token, uint256 amount) external returns (bool);
}
