/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { getReturnFrame, getTBDFrame } from '../uniswap';
import { getSupplyFrame } from './index';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    // const body: FrameRequest = await req.json();
    // const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
    // if (!isValid) {
    //     return new NextResponse('Message not valid', { status: 500 });
    // }
    const frameRequest: FrameRequest = await req.json();
    const button = frameRequest.untrustedData.buttonIndex;
    
    if (button == 1) {
        console.log('supply')
        return getSupplyFrame()
    }
    return getTBDFrame()
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';