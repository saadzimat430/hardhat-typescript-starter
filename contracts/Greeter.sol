// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Greeter {
    string private greeting;
    event GreetingChanged(string oldGreeting, string newGreeting);

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() external view returns (string memory) {
        return greeting;
    }

    function setGreeting(string calldata _greeting) external {
        string memory old = greeting;
        greeting = _greeting;
        emit GreetingChanged(old, _greeting);
    }
}
