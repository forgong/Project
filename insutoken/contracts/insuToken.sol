pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
 
contract insuToken is StandardToken {
    string public name = "insuToken"; 
    string public symbol = "INSU"; //통화단위
    uint256 public decimals = 1; //자리수
    uint256 public totalSupply = 10000 * (10 ** decimals);
 
    //생성자
    function insuToken() public {
      balances[msg.sender] = totalSupply;
    }
}
