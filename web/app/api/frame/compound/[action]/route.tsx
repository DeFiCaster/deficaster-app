/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { getReturnFrame, getTBDFrame, getErrorFrame } from '../../uniswap';
import { getSupplyResultFrame } from '../index'
import { handleSupply, handleBorrow } from './handler';

async function getResponse(req: NextRequest, params): Promise<NextResponse> {
    const frameRequest: FrameRequest = await req.json();
    const action = params.action;
    const button = frameRequest.untrustedData.buttonIndex;
    console.log('frameRequest.untrustedData.', frameRequest.untrustedData)

    // const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
    // if (!isValid) {
    //     return new NextResponse('Message not valid', { status: 500 });
    // }
    const usdcAddress = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238' // sepolia usdc 
    const userFid = frameRequest.untrustedData.fid
    let userAddress
    try {
        userAddress = await getFarcasterUserAddress(userFid, { neynarApiKey: process.env.NEXT_PUBLIC_REACT_NEYNAR_API_KEY as string })
        console.log('get user address:', userAddress)
    } catch (e) {
        console.error('failed to fetch user address', userFid)
        console.error(e)
        return getErrorFrame();
    }
    // userAddress = '0x5DfD4b5515940a82358905B88D1C956b356c3C15' // Todo:: delete this
    if (userAddress == null) {
        return getErrorFrame('No binding address');
    }

    const amount = parseInt(frameRequest.untrustedData.inputText, 10)
    if (action === 'supply') {
        // supply form submitted
        const result = await handleSupply(userAddress, usdcAddress, 6, amount);
        const msg: string = result ? result.hash : 'Internal Error';
        return getSupplyResultFrame(msg);
    } else if (action === 'borrow') {
        return getTBDFrame();
    }
    return getReturnFrame();
}

export async function GET(req: NextRequest, { params }: { params: { action: string; } }): Promise<Response> {
    return getTBDFrame();
    // console.log('get request', params)
    // return getResponse(req, params);
}

export async function POST(req: NextRequest, { params }: { params: { action: string; } }): Promise<Response> {
    return getResponse(req, params);
}

export const dynamic = 'force-dynamic';