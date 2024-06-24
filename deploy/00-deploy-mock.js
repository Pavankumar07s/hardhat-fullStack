const { network } = require("hardhat")
const { networkConfig } = require("../helper-harhat-config")
const {
    developmentChains,
    DECIMAL,
    INITIAL_ANSWER,
} = require("../helper-harhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, execute } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        console.log("local network detected !deploying Mocks")
        const MockV3Aggregator = await deploy("MockV3Aggregator", {
            from: deployer,
            args: [DECIMAL, INITIAL_ANSWER],
            log: true,
        })
        console.log("Mocks deployed")
        console.log("--------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
