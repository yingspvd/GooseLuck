pragma solidity 0.8.13;

contract Lottery { 
    address payable public owner;
    uint256 public totalReward;
    uint256 public reward;          // Reward in that round
    uint256[] public resultArray;
    uint256[] public allLottery;
    mapping(address => uint256) public accountBuy;         // amount of buy lottery
    mapping(address => uint256[]) public numberLottery;    // number of lottery
    
    constructor(){
        owner = payable(msg.sender);
        totalReward = 0;
        reward = 0;
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

    function showLottery(address account) public view returns (uint256[] memory){
        return numberLottery[account];
    }

    function showAllLottery() public view returns (uint256[] memory){
        return allLottery;
    }

    function keepResult(uint256 result) public  {
        resultArray.push(result);
    }

    function returnReward() public view returns(uint256){
        return reward;
    }

    function getAllResult() public view returns(uint256[] memory){
        return resultArray;
    }

    function checkResult(address account,uint256 result) public view returns(bool){
        require(numberLottery[account].length > 0);
        for (uint256 i = 0; i < numberLottery[account].length; i++) {
            if(numberLottery[account][i] == result){
                // payable(msg.sender).transfer(reward);
                return true;
            }   
        }
        return false;
    }

    function calculateReward() public view {
        // uint256 count = 0;
        // for (uint256 i = 0; i < allLottery.length; i++) {
        //     if(allLottery[i] == result){
        //         count += 1;
        //     }
        // }
        // reward = totalReward / count;
    }

}