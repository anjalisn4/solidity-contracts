// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Inbox {

// type public variable_name
    string public message;

// this is a constructor, called one time when contract is deployed
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

// function function_name(args) function_tyoe return_types 
//--------------------------------------------------------------------------
// Function Types
// public : Anyone can call this function
// private: only this contract can call this function (helper functions)
// view/constant: specifies that data is not modified and just accessed
// pure: function will not modify or evne read the contract's data
// payabale: when someone call this function they might send ether along
//---------------------------------------------------------------------------
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    // really not required, message is available publicly
    function getMessage() public view returns (string memory){
        return message;
    }
}