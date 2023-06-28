// contracts/ERC20Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MikhailToken is ERC20 {

    struct House{
        uint houseNumber;
        address houseOwnerEth;
        bool isFancy;
    }

    mapping(uint => House) public houses;
    
    event newAction(
        uint256 indexed date,
        address actor,
        string action
    );


    function addHouse(
        uint _key, bool _isFancy,
        uint _houseNumber, address _houseOwnerEth)
    public returns(uint)
    {
        houses[_key] = House({
            houseNumber: _houseNumber,
            houseOwnerEth: _houseOwnerEth,
            isFancy: _isFancy
        });
        emit newAction(block.timestamp, msg.sender, "add");
        return 123;
    }
    


    function removeHouse(uint _key)
    public
    {
        delete houses[_key];
        emit newAction(block.timestamp, msg.sender, "remove");
    }


    constructor(uint256 initialSupply) ERC20("MikhailToken", "MHL") {
        _mint(msg.sender, initialSupply * (10**18));
    }

    function test() pure
    public returns(uint)
    {
        return 12345;
    }
}