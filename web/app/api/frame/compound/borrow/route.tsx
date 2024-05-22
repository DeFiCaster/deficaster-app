/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { getReturnFrame, getTBDFrame } from '../../uniswap';


async function getResponse(req: NextRequest, params): Promise<NextResponse> {
    const frameRequest: FrameRequest = await req.json();
    const action = params.action;
    const button = frameRequest.untrustedData.buttonIndex;

    // const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
    // if (!isValid) {
    //     return new NextResponse('Message not valid', { status: 500 });
    // }
    if (action === 'supply') {
        return getTBDFrame();
    } else if (action === 'borrow') {
        return getTBDFrame();
    }
    return getReturnFrame();
}

export async function GET(req: NextRequest, { params }: { params: { action: string; } }): Promise<Response> {
    return getResponse(req, params);
}

export async function POST(req: NextRequest, { params }: { params: { action: string; } }): Promise<Response> {
    return getResponse(req, params);
}

export const dynamic = 'force-dynamic';