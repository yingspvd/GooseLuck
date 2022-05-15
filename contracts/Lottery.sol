pragma solidity 0.8.13;

contract Lottery { 
    bool public status;                     // Status for check result
    address payable public owner;           // Owner's address
    uint256 public totalReward;             // Total reward
    uint256 public round;                   // Round of lottery 
    string public nowDate;                  // Round of awards
    uint256[] public reward;                // Reward in each round
    uint256[] public resultHistory;         // Result's history
    string[] public dateHistory;            // Result date history
    uint256[] public allLottery;            // All lottery in that round
    uint256[][] public lotteryTemp;         // Array for return my lottery
    
    mapping(address =>  mapping(uint256 => uint256[])) public myLottery;    // All lottery of each person in each round

    // Constructor function for set initial value
    constructor(){
        owner = payable(msg.sender);
        totalReward = 0;
        round = 0;
    }

// ************************************ Buy Lottery ************************************

    // This function use for buy lottery.
    function buyNewLottery(uint256 fee, uint256 _number, address account) public payable{
        require(msg.value == fee && fee > 0);
        myLottery[account][round].push(_number);
        allLottery.push(_number);
        totalReward += fee;
    }

    function getTotalReward() public view returns(uint256){
        return totalReward;
    }

// ********************************* Lottery Results ************************************
    function getHistoryResult() public view returns(uint256[] memory){
        return resultHistory;
    }

    function getHistoryDate() public view returns(string[] memory){
        return dateHistory;
    }
// ********************************* My Ticket ******************************************
     function getMyLottery(address account) public returns (uint256[][] memory){
        for (uint256 i = 0; i <= round; i++) {
            lotteryTemp.push(myLottery[account][i]);
        }
        return lotteryTemp;
    }

    function checkResult(address account,uint256 _number, uint256 _round, uint256 index) public payable {
        if(_number == resultHistory[_round]){
            status = true;
            payable(account).transfer(reward[_round]);
        }
        else{
            status = false;
        }

        // Delete array when alreay check
        uint256 length = myLottery[account][_round].length;
        myLottery[account][_round][length-index-1] = myLottery[account][_round][length - 1];
        myLottery[account][_round].pop();
    }

    function getStatus() public view returns (bool){
        return status;
    }

// ********************************* Admin ******************************************
    function checkIsAdmin(address account) public view returns(bool){
        if(account == owner){
            return true;
        }
        else{
            return false;
        }   
    }

    function getNumTicket() public view returns(uint256){
        return allLottery.length;
    }

    function getDateNow() public view returns(string memory) {
        return nowDate;
    }

    function calculateReward() public view returns(uint256){
        uint256 count = 0;
        for (uint256 i = 0; i < allLottery.length; i++) {
            if(allLottery[i] == resultHistory[round]){
                count += 1;
            }
        }
        return count;
    }

    function keepResult(uint256 result, string memory anounce, string memory _nowDate) public {
        uint256 _reward = 0;
        uint256 count = 0;
        resultHistory.push(result);
   
        count = calculateReward();

        if(count == 0){
            _reward = 0;
        }
        else{
            _reward = totalReward / count;
            totalReward = 0;
        }

        reward.push(_reward);
        dateHistory.push(anounce);
        nowDate = _nowDate;
        round += 1;
        delete allLottery;
    
    }

    function getRound() public view returns(uint256 ) {
        return round;
    }

    function updateDate(string memory date) public {
        nowDate = date;
    }

}