pragma solidity 0.8.13;

contract Lottery { 
    address payable public owner;
    uint256 public totalReward;
    uint256[] public resultArray;
    uint256[] public allLottery;
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
        allLottery.push(number);
        totalReward += fee;
    }

    function getReward() public view returns(uint256){
        return totalReward;
    }

    function showLottery() public view returns (uint256[] memory){
        return numberLottery[msg.sender];
    }

    function showAllLottery() public view returns (uint256[] memory){
        return allLottery;
    }

    function keepResult(uint256 result) public {
        resultArray.push(result);
    }

    function getAllResult() public view returns(uint256[] memory){
        return resultArray;
    }

    function checkResult(uint256 number) public view returns(bool flag){
        require(numberLottery[msg.sender].length > 0);
        for (uint256 i = 0; i <= numberLottery[msg.sender].length; i++) {
         if(numberLottery[msg.sender][i] == number){
             return true;
         }   
         else{
             return false;
         }
        }
    }

}