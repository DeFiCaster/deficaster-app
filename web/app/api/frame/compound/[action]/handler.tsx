/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ethers, Contract, Wallet } from "ethers";
import DeFiCasterPaymentAgentABI from '../../_abis/DeFiCasterPaymentAgent.json';

const initWallet = () => {
    const provider: ethers.Provider = new ethers.InfuraProvider('sepolia', process.env.INFURA_API_KEY as string)
    const signer: ethers.Signer = new Wallet(process.env.SIGNER_PRIVATE_KEY as string, provider);
    const agentContract = new Contract(process.env.DEFI_CASTER_AGENT_CONTRACT_ADDR as string, DeFiCasterPaymentAgentABI, signer)
    return [provider, signer, agentContract]
}

export const handleSupply = async (userAddress, token, decimals: number, amount) => {
    console.log('start to handle supply', userAddress, token, decimals, amount)
    // const decimals = 6
    // start to mint for the users
    // Todo: MQ
    const [provider, signer, agentContract] = initWallet();
    const amountB = amount * (10^decimals); //Todo:: use BigNumber
    const gasLimit = 300000n;
    // Todo:: detect allowance first

    try {
        // agentContract.connect(signer);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        const tx = await agentContract.spend('compound', userAddress, token, amountB, {
            gasLimit
        });
        console.log('[handleSupply]tx sent success', tx);
    } catch (e) {
        console.error('[handleSupply] failed to spend on params', 'compound', userAddress, token, amountB)
        console.error(e)
        return false
    }
    return true
}

export const handleBorrow = async (token, amount) => {

}