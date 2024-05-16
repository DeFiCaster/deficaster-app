/* eslint-disable react-perf/jsx-no-new-array-as-prop */
'use client';
import React, { useState } from "react";
import { FrameMetadata } from '@coinbase/onchainkit';
import { useProfile } from '@farcaster/auth-kit';
import { useAccount } from 'wagmi'
import Footer from '@/components/layout/footer/Footer';
import Main from '@/components/layout/Main';
import Attest from './_components/Attest';
import HomeHeader from './_components/HomeHeader';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */

// console.log('process.env.NEXT_PUBLIC_WEBSITE_URL', process.env.NEXT_PUBLIC_WEBSITE_URL)

export default function HomePage() {
  const [cast, setCast] = useState("")
  const [castURL, setCastURL] = useState("")

  const [castFID, setCastFID] = useState(0)
  const [castHash, setCastHash] = useState("")
  const account = useAccount()
  const {
    isAuthenticated,
    profile: { username, fid },
  } = useProfile();
  // console.log('isAuthenticated', isAuthenticated, 'fid', fid, 'username', username)

  return (
    <>
      <HomeHeader isAuthenticated={isAuthenticated} profile={{ username , fid}} castURL={castURL} setCast={setCast} setCastFID={setCastFID} setCastHash={setCastHash} setCastURL={setCastURL}/>
      <Main>
        <Attest isAuthenticated={isAuthenticated} profile={{ username, fid }} castURL={castURL} cast={cast} castFID={castFID} castHash={castHash} account={account} />
      </Main>
      <Footer />
      <FrameMetadata
        buttons={[
          {
            label: 'Choose a service',
          },
          {
            action: 'post',
            label: 'Lending - Compound',
          },
          // {
          //   action: 'post',
          //   label: 'Lending - AAVE',
          // },
          {
            action: 'post',
            label: 'Margin - Dydx',
          },
          {
            action: 'post',
            label: 'Swap - Uniswap',
          },
        ]}
        image={{
          src: 'https://zizzamia.xyz/park-3.png',
          aspectRatio: '1:1'
        }}
        // input={{
        //   text: 'Tell me a boat story',
        // }}
        postUrl={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/frame`}
      />
    </>
  );
}
