# DeFiCaster App - Connect Farcaster Frame with DeFi

This repo is the front-end and back-end repo of DeFiCaster App.

DeFiCaster is a middleware for farcaster users or developers who want to connect DeFi to Farcaster.

## What is Farcaster

- Farcaster is one the most popular decentralized social protocol
- It is a public social network similar to Twitter and Reddit. Users can create profiles, post "casts" and follow others. They own their accounts and relationships with other users and are free to move between different apps.
- App: https://www.farcaster.xyz/

## What is Farcaster Frames
- A Frame lets you turn any cast into an interactive app.
- The entry point to Blockchain Network
- Massive Adoption Ready

## The idea of DeFiCaster

- Building a middleware layer between DeFi and Farcaster Frame

- Frames come with restrictions

- Build a process and related tools for Farcaster Frame to maximal its ability

- Connect DeFi and blockchain with large scale users through Farcaster Frames

## Getting Started

#### Step 1: Obtain Wallet Connect Project ID from [walletconnect.com](https://cloud.walletconnect.com/sign-in) and assign to the `.env.local` file

```bash
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=ADD_WALLET_CONNECT_PROJECT_ID_HERE
```


#### Step 2: run `cp ./web/.env.local.example ./web/.env.local` and fill out the following parameters
```
# The bot to sign attestation, any ETH accounts
SIGN_BOT_PRIVATE_KEY=
# This bot is used to post attestations on Farcaster, FID and Key should match
FARCASTER_BOT_FID=
FARCASTER_BOT_PRIVATE_KEY=
# Schema Id from Sign Protocol
NEXT_PUBLIC_SIGN_PROTOCOL_SCHEMA_ID_FARCASTER=
# Neynar API Key
NEXT_PUBLIC_REACT_NEYNAR_API_KEY=
```

#### Step 3: Install and Run your onchain app

```bash
# Install
yarn

# Run
yarn dev
```

#### Step 4: Deploy in Vercel

deploy both fron-end and back-end in [Vercel](https://vercel.com/)

## Develop

To format and lint the package locally use these quick steps.

```bash
# Format fix
yarn format

# Lint fix
yarn lint
```

## Thanks

This repo is built based on [Coinbase OnchainKit](https://github.com/coinbase/onchainkit)

We are thinking of ways to make this step easier in the future! Happy hacking!
