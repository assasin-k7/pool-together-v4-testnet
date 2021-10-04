# PoolTogeher V4 Testnet
The V4 testnet deployed contracts and essential hardhat tasks.

# Setup
```.sh
$ yarn
```

## New Deployments
```.sh
$ yarn deploy-rinkeby
```

```.sh
$ yarn deploy-mumbai
```

## Acquire Tokens & Tickets

```.sh
$ yarn disburse rinkeby
```

```sh
$ yarn disburse mumbai
```

```sh
$ yarn deposit rinkeby
```

```sh
$ yarn deposit mumbai
```

## Test Deployment Scripts

```.sh
$ yarn node-rinkeby
```

```.sh
$ yarn node-mumbai
```

# Tasks
Interact with the V4 testnet deployed contracts through hardhat tasks.

`yarn task [TASK_NAME]`

`yarn task [TASK_NAME] --wallet 0`

`yarn task [TASK_NAME] --user 0x0000000000000000000000000000000000000000`

## Calculations

- **winningPickIndices:** Calclates a users winning picks and prize tier (distribution index) results

## DrawPrize

- **claim:** Claim winning draw prizes and receive tickets 

## DrawHistory

- **getDraws:** Read target draw history parameters 
- **getOldestDraw:** Read oldest draw history parameters
- **getNewestDraw:** Read newest draw history parameters
- **getLiveDraws:** Read all draw history parameters between oldest and newest
- **pushDraw:** Push new draw parameters
- **setDraw:** Set existing draw parameters

## PrizeDistributionHistory

- **getPrizeDistribution:** Read target prize distribtion parameters
- **getOldestPrizeDistribution:** Read oldest prize distribtion parameters
- **getNewestPrizeDistribution:** Read newest prize distribtion parameters 
- **getLivePrizeDistributionList:** Read all prize distribution history between oldest and newest

## PrizePool

 - **deposit:** Deposit tokens and mint tickets
 
## Ticket

 - **balanceOf:** Read balance of user address
 - **getAccountDetails:** Read account details of user address
 - **getAverageBalancesBetween:** Read average balance between epoch timestamp of user address
 - **delegate:** Delegate TWAB to delegate address
 - **transfer:** Transfer balance of ticket to recipient address

### Parameters

Certain tasks require a "user" address like `claim` and `calculate`.

Default the `wallet` address is used. A `user` address can be passedd

**Default (Index 0) Wallet in Mnemonic**<br/>
`yarn task [TASK_NAME] --wallet 0`

**Index 1 Wallet in Mnemonic**<br/>
`yarn task [TASK_NAME] --wallet 1`

**Pass User Address**<br/>
`yarn task [TASK_NAME] --user 0x0000000000000000000000000000000000000000`

## Dashboard (Experimental)
Open a CLI dashboard to view the state of deployed testnet contracts.

```.sh
$ yarn dashboard
```
<p align="left">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="./img/dashboard.png" alt="PoolTogether Brand" style="max-width:100%;" width="400">
  </a>
</p>