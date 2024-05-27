## DeFicaster Plugins

The plugin is used to connect to different DeFi protocols.

* CompoundPlugin: Compound v3


To use these plugins, there are different prerequisites for each plugin.

### CompoundPlugin

* The user need to approve erc20 token to the CompoundPlugin contract
* The user need to approve this contract as a manager in Comet contract(Function: allow, Params: [CompoundPluginAddress, true])

An exmaple using `cast`

```shell
$ cast mktx {CONTRACT_ADDRESS} "allow(address manager,bool isAllowed_)" {COMET_ADDRESS} true -r https://1rpc.io/sepolia --interactive

$ cast publish {Generated tx in last commend}

```