import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextResponse } from 'next/server';

export async function getFrame0() {

    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'Open a Position',
                    action: 'post',
                },
                // {
                //     label: 'Main Manu',
                //     action: 'post',
                // },
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
                aspectRatio: '1:1',
            },
            postUrl: process.env.NEXT_PUBLIC_WEBSITE_URL as string + '/api/frame/dydx/',
            ogTitle: 'DeFiCaster - Dydx',
            ogDescription: 'Original cast and context of attestation ',
        }),
    );
}