/*
Rules for StudentEnrollmentContract

1) amount can not be paid from ownerAddress who deployed the contract
2) amount must be greater than or equals to 2 ether
3) setStudentInfo can only be accessible to Student
4) checkCollectedAmount can only be accessible to onlyOwner
5) Once the amount is paid it cant be paid again with same address

Happy Coding :-) @Syed Taha

*/

pragma solidity ^0.5.1;

contract StudentEnrollmentContract{
    
    uint256 public requiredAmount;
    address payable public ownerAddress;
    uint public studentRegistered=0;
    uint256 public initialAmount;
    uint256 collectAmount = 0;
    
    constructor() public{
        ownerAddress = msg.sender;
        requiredAmount = 2000000000000000000 ;
        
    }
    
    modifier onlyOwner(){
        require(msg.sender == ownerAddress);
        _;
    }
    modifier onlyStudent(){
        require(msg.sender != ownerAddress);
        _;
    }
    
    enum Status{Online,Onsite}
    enum Gender{Male,Female}
    
    struct Student{
        address add;
        string name;
        uint256 amount;
        Status status;
        Gender gender;
        bool isPaid;
        bool isDegree;
        bool isVal;
    }
    
    mapping(address => Student) public people;
    
    function setStudentInfo(address payable _add,string memory _name,bool _isDegree,Status _status,Gender _gender) public onlyStudent{
        people[msg.sender] = Student(_add,_name,0,_status,_gender,false,_isDegree,true);
    }
    
    function pay() public payable onlyStudent{
      
        require(msg.value >= requiredAmount );
        require(people[msg.sender].isPaid == false);
        ownerAddress.transfer(msg.value);
        people[msg.sender].amount=msg.value;
        people[msg.sender].isPaid=true;
        studentRegistered = studentRegistered+1;
        collectAmount += msg.value;
       
    }
    
    function checkBal() public view returns(uint256){
        uint256 bal = msg.sender == ownerAddress ? ownerAddress.balance : msg.sender.balance;
        return bal;
    }
    
    function checkCollectedAmount() public view onlyOwner returns(uint256){
        return collectAmount;
    }
    

    
}