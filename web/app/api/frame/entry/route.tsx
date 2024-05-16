/* eslint-disable @typescript-eslint/no-unused-vars */
import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'Choose a service',
                },
                {
                    action: 'post',
                    label: 'Lending - Compound',
                },
                {
                    action: 'post',
                    label: 'Margin - Dydx',
                },
                {
                    action: 'post',
                    label: 'Swap - Uniswap',
                },
            ],
            image: {
                src: 'https://zizzamia.xyz/park-3.png',
                aspectRatio: '1:1'
            },
            postUrl: process.env.NEXT_PUBLIC_WEBSITE_URL as string + '/api/frame'
        }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';