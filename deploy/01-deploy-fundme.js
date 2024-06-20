const { network } = require("hardhat")
const { networkConfig } = require("../helper-harhat-config")
module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnnamedAccounts,
}) => {
    const { deploy, execute } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const ethUsdPriceFeed = networkConfig[chainId]["ethUsdPriceFeed"]
    // const OVM_L1ERC20Gateway = await hre.companionNetworks['l1'].deployments.get(
    //   'OVM_L1ERC20Gateway'
    // ); // layer 1

    // await execute(
    //   'SimpleERC20_OVM',
    //   {from: deployer, log: true},
    //   'init',
    //   OVM_L1ERC20Gateway.address
    // );
    const Fundme = await deploy("FundMe", {
        from: deployer,
        args: [address],
        log: true,
    })
}
