// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ISpendable} from "./interfaces/ISpendable.sol";

/**
 * Payment agent contract for DeFiCaster
 * Description: This contract allows the user sign an offchain message and use third-party agent to submit the message on-chain to spend the user's asset
 *  The contract will use Permit2 model to support the on-chain transfer
 *  Permit2: https://docs.uniswap.org/contracts/permit2/overview
 */
contract DeFiCasterPaymentAgent {
    address public _owner;
    address public _keeper;
    // supported product and related smart contract address
    mapping(string => address) public _products;

    constructor() {
        _owner = msg.sender;
        _keeper = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "only-owner");
        _;
    }

    modifier onlyKeeper() {
        require(msg.sender == _keeper, "only-keeper");
        _;
    }

    function changeKeeper(address _newKeeper) external onlyOwner {
        _keeper = _newKeeper;
    }

    function addProduct(string calldata product, address contractAddr) external onlyOwner returns (bool) {
        if (_products[product] == address(0)) {
            _products[product] = contractAddr;
            return true;
        }
        return false;
    }

    function changeProduct(string calldata product, address newAddr) external onlyOwner returns (bool) {
        if (_products[product] != address(0)) {
            _products[product] = newAddr;
            return true;
        }
        return false;
    }

    function spend(string calldata product, address user, address token, uint256 amount)
        external
    {
        require(_products[product] != address(0), "invalid product");
        ISpendable(_products[product]).spend(user, token, amount);
    }
}
