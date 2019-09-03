var insuToken = artifacts.require("./insuToken.sol"); 

module.exports = function(deployer) {
    deployer.deploy(insuToken);
};
