import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextResponse } from 'next/server';

/**
 * Display the menus of Compound
 */
export async function getFrame0() {

    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'Supply',
                    action: 'post',
                },
                {
                    label: 'Borrow',
                    action: 'post',
                },
                // {
                //     label: 'Main Menu',
                //     action: 'post',
                // },
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
                aspectRatio: '1:1',
            },
            postUrl: process.env.NEXT_PUBLIC_WEBSITE_URL as string + '/api/frame/compound',
            ogTitle: 'DeFiCaster - Compound',
            ogDescription: 'Original cast and context of attestation',
        }),
    );
}


export async function getSupplyFrame() {

    return new NextResponse(
        getFrameHtmlResponse({
            input: {
                text: 'How much USDC to Supply?'
            },
            buttons: [
                {
                    label: 'Supply',
                },
                // {
                //     label: 'Main Menu',
                //     action: 'post',
                // },
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
                aspectRatio: '1:1',
            },
            postUrl: process.env.NEXT_PUBLIC_WEBSITE_URL as string + '/api/frame/compound/supply',
            ogTitle: 'DeFiCaster - Compound',
            ogDescription: 'Original cast and context of attestation',
        }),
    );
}

export async function getSupplyResultFrame(txn_hash = '') {

    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'Txn Sent',
                },
                
                {
                    label: 'Return',
                    action: 'post'
                },
                {
                    label: 'Supply',
                    action: 'link',
                    target: 'https://sepolia.etherscan.io/tx/' + txn_hash
                }
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
                aspectRatio: '1:1',
            },
            postUrl: process.env.NEXT_PUBLIC_WEBSITE_URL as string + '/api/frame/entry',
            ogTitle: 'DeFiCaster - Compound Supply Result',
            ogDescription: 'Compound supply transaction result',
        }),
    );
}

export async function getBorrowFrames() {}