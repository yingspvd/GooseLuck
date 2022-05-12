pragma solidity 0.8.13;

contract Lottery { 
    address payable public owner;
    uint256 public totalReward;
    // uint256 public winDate;
    uint256[] public resultArray;
    mapping(address => uint256) public accountBuy;         // amount of buy lottery
    mapping(address => uint256[]) public numberLottery;    // number of lottery
  
    constructor(){
        owner = payable(msg.sender);
        totalReward = 0;
    }
    
    function buyLottery(uint256 fee, uint256 number) public payable{
        require(msg.value == fee && fee > 0);
        accountBuy[msg.sender] += fee;
        numberLottery[msg.sender].push(number);
        totalReward += fee;
    }

    function getReward() public view returns(uint256){
        return totalReward;
    }

    function showLottery() public view returns (uint256[] memory){
        return numberLottery[msg.sender];
    }

    function keepResult(uint256 result) public returns(uint256[] memory){
        resultArray.push(result);
        return resultArray;
    }

    function getAllResult() public view returns(uint256[] memory){
        return resultArray;
    }

    // function keepWinDate() public returns(uint256){
    //     winDate = block.timestamp;
    //     return winDate;
    // }

    // function getWinDate() public view returns (uint256) {
    //     return winDate;
    // }


}