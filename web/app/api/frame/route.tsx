/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FrameRequest } from '@coinbase/onchainkit/frame';
import { NextRequest } from 'next/server';
// import * as aave from './aave'
import { getFrame0 as getCompoundFrame } from './compound'
import { getFrame0 as getDydxFrame } from './dydx'
import { getFrame0 as getUniswapFrame, getReturnFrame } from './uniswap'

// export async function GET(
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     req: NextRequest
// ): Promise<Response> {
//     return getReturnFrame()
// }

export async function POST(
    req: NextRequest
): Promise<Response> {
    console.log('/frame post received')
    const frameRequest: FrameRequest = await req.json();
    console.log('frameRequest', frameRequest);
    const button = frameRequest.untrustedData.buttonIndex;

    // button: 0: none 1: compound 2: dydx 3: uniswap

    console.log('buttonIndex:', button)
    switch (button) {
        case 2:
            return getCompoundFrame();
        case 3:
            return getDydxFrame();
        case 4:
            return getUniswapFrame();
        default:
            console.log("case default");
            return getReturnFrame()
    }
}

export const dynamic = 'force-dynamic';