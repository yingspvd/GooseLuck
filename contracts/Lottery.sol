pragma solidity 0.8.13;

contract Lottery { 
    address payable public owner;
    uint256 public totalReward;
    uint256[] public reward;          // Reward in that round
    uint256[] public resultHistory;
    string[] public dateHistory;
    string public nowDate;
    uint256[] public allLottery;
    mapping(address => uint256) public accountBuy;          // amount of buy lottery
    // mapping(address => uint256[]) public myLottery;         // number of lottery
      
    uint256 public round;
    // string public roundDate;

    uint256[][] public lotteryTemp;
    mapping(address => uint256) public amountTicket;
    mapping(address =>  mapping(uint256 => uint256[])) public myNewLottery;


    constructor(){
        owner = payable(msg.sender);
        totalReward = 0;
        round = 0;
    }

// ******************** Buy Ticket **************************
    function buyNewLottery(uint256 fee, uint256 _number, address account) public payable{
        require(msg.value == fee && fee > 0);
        accountBuy[account] += fee;
        myNewLottery[account][round].push(_number);
        allLottery.push(_number);
        totalReward += fee;
    }

    function getTotalReward() public view returns(uint256){
        return totalReward;
    }

// ******************** History **************************
    function getHistoryResult() public view returns(uint256[] memory){
        return resultHistory;
    }

    function getHistoryDate() public view returns(string[] memory){
        return dateHistory;
    }

  // ******************** My Ticket **************************  
     function getMyLottery(address account) public returns (uint256[][] memory){
        for (uint256 i = 0; i <= round; i++) {
            lotteryTemp.push(myNewLottery[account][i]);
        }
        return lotteryTemp;
    }

    function checkResult(uint256 _number, uint256 _round) public view returns(string memory){
        // if(_round - 1 < round){
        //     if(_number == resultHistory[_round]){
        //         // payable( msg.sender).transfer(reward[_round]);
        //         return "true";
        //     }
        //     else{
        //         return "false";
        //     }
        // }
        // else{
        //     return "This round has not yet been announced";
        // }
         if(_number == resultHistory[_round]){
                // payable( msg.sender).transfer(reward[_round]);
                return "true";
            }
            else{
                return "false";
            }
    }

    // function check() public payable {
    //     uint256 num = 0
    //     payable( msg.sender).transfer();
    // }
// ******************** Admin **************************
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
   
        for (uint256 i = 0; i < allLottery.length; i++) {
            if(allLottery[i] == resultHistory[round]){
                count += 1;
            }
        }

        if(count == 0){
            _reward = 0;
        }
        else{
            _reward = totalReward / count;
        }
        reward.push(_reward);
        
        dateHistory.push(anounce);
        nowDate = _nowDate;

        round += 1;
        totalReward = 0;
        delete allLottery;
    
    }

      function getRound() public view returns(uint256 ) {
        return round;
    }

  
/////////////////// notuuse
    function showAllLottery() public view returns (uint256[] memory){
        return allLottery;
    }

// function buyLottery(uint256 fee, uint256 number) public payable {
    //     require(msg.value == fee && fee > 0);
    //     accountBuy[msg.sender] += fee;
    //     myLottery[msg.sender].push(number);
    //     allLottery.push(number);
    //     totalReward += fee;
    // }

        
    // function buyNewLottery(uint256 fee, uint256 number, string memory date) public payable {
    //     require(msg.value == fee && fee > 0);
    //     accountBuy[msg.sender] += fee;
    //     roundDate = date;
    //     myLottery[msg.sender].push(number);
    //     allLottery.push(number);
    //     totalReward += fee;
    // }

    // function getRoundDate() public view returns(string memory){
    //     return roundDate;
    // }

    // function getRound() public view returns(uint256){
    //     return round;
    // }

//  function getMyLottery(address account) public view returns (uint256[] memory){
//         return myLottery[account];
//     }
}