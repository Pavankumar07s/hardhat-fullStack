const networkConfig={
    11155111:{
        name:'sepholia',
        ethUsdpriceFeed:'0x694AA1769357215DE4FAC081bf1f309aDC325306'
    },
    137:{
        name:'polygon',
        ethUsdpriceFeed:'0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676'
    }
}       

const developmentChains=["hardhat","localhost"]
const DECIMAL=8;
const INITIAL_ANSWER=20000000000

module.exports={networkConfig,developmentChains,DECIMAL,INITIAL_ANSWER};