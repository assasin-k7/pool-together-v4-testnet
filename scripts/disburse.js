const chalk = require('chalk')
const hardhat = require("hardhat")
const { ethers } = hardhat

const toWei = ethers.utils.parseEther

async function run() {

  const yieldSource = await ethers.getContract('MockYieldSource')
  const token = await ethers.getContractAt('ERC20Mintable', (await yieldSource.depositToken()))
  const ticket = await ethers.getContract('Ticket')
  const prizePool = await ethers.getContract('YieldSourcePrizePool')
  const claimableDraw = await ethers.getContract('ClaimableDraw')

  const signers = await ethers.getSigners()

  const mintTokenTo = [
    signers[0].address,
    '0x3A791e828fDd420fbE16416efDF509E4b9088Dd4',
    '0xA57D294c3a11fB542D524062aE4C5100E0E373Ec'
  ]

  for (let index = 0; index < mintTokenTo.length; index++) {
    console.log(chalk.dim(`Minting to ${mintTokenTo[index]}...`))
    await token.mint(mintTokenTo[index], toWei('100000000'))
  }
}

run()