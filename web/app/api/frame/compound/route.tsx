/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { getReturnFrame } from '../uniswap';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    // const body: FrameRequest = await req.json();
    // const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
    // if (!isValid) {
    //     return new NextResponse('Message not valid', { status: 500 });
    // }
    const frameRequest: FrameRequest = await req.json();
    const button = frameRequest.untrustedData.buttonIndex;
    if (button == 2) {
        console.log('return frame')
        console.log('get return frame', await getReturnFrame())
        return getReturnFrame()
    }

    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'TBD',
                },
                // {
                //     action: 'post',
                //     label: 'Return',
                //     target: '/',
                // }
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
            },
            postUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/frame/compound`,
            state: {
                page: 1,
                time: new Date().toISOString(),
            },
        }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';