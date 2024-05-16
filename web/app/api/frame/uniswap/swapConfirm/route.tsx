/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { getReturnFrame } from '..';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    const body: FrameRequest = await req.json();
    console.log('post received', body)
    // const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
    // if (!isValid) {
    //     return new NextResponse('Message not valid', { status: 500 });
    // }
    const buttonIndex = body.untrustedData.buttonIndex;
    if (buttonIndex == 2) {
        return getReturnFrame();
    }

    const amountToBeSwaped = body.untrustedData.inputText
    console.log('user confirmed to swap', amountToBeSwaped, 'USDC to ETH')

    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    action: 'post',
                    label: 'Confirm:' + amountToBeSwaped + ' USDC to ETH.'
                },
                {
                    action: 'post',
                    label: 'No, return',
                }
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
            },
            postUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/frame/uniswap/swap`,
            state: {
                time: new Date().toISOString(),
            },
        }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';