## DeFiCaster-Contracts

This is the contract repo for `DeFiCaster`.

In the repo, several contracts are implemented:

- `DeFiCasterPaymentAgent`: allows the contract help user's spend their money in a specific purpose.
- `CompoundPlugin`: allows to stake in the compound on-behalf of the user

## Approval

To use the payment agent, the user should approve the token to deficaster permit2 contract in advance.

`permit2` will be used as the payment approval model.

- Step 1: The user approve token to permit2 contract in advance. The approve amount is better to be max.
- Step 2: The user sign an off-chain message and send it to deficaster-server
- Step 3: DeFiCaster's server verifies user's message
- Step 4: DeFiCaster sent an onchain transaction by using 'spend' function to spend user's fund for a specific purpose(Staking, Minting, Deposit etc...)

## Deployment

### Sepolia

- `DeFiCasterPaymentAgent`: [0xc5dfe8fffc58196b90cf4494400f7f3fd97d2e8f](https://sepolia.etherscan.io/address/0xc5dfe8fffc58196b90cf4494400f7f3fd97d2e8f)
- `CompoundPlugin`: [0x597acc9e2d3fc1031383a748b52bfe00a20f054f](https://sepolia.etherscan.io/address/0x597acc9e2d3fc1031383a748b52bfe00a20f054f)
 
## Usage

This repo is built based on `foundry`.

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Env

```shell
$ cp .env.example .env
```
Use your variables

### Deploy

```shell
$ source .env
$ forge script --chain sepolia  script/DeFiCasterPaymentAgent.s.sol --rpc-url $SEPOLIA_RPC_URL --broadcast --verify -vvvv
```

### Verify Contract

In last step, if verified sucess, then this step can be ignored.

If it's failed to verify, then run the following commend to verify:

```shell
$  forge v -c sepolia [DEPLOYED_ADDRESS] ./src/DeFiCasterPaymentAgent.sol:DeFiCasterPaymentAgent
$  forge v -c sepolia [DEPLOYED_ADDRESS] ./src/plugins/CompoundPlugin.sol:CompoundPlugin
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
