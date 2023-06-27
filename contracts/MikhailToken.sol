// contracts/ERC20Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MikhailToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MikhailToken", "MHL") {
        _mint(msg.sender, initialSupply);
    }
}