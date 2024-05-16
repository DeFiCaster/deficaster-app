# DeFiCaster

DeFiCaster is an user agent middleware built for Farcaster Frames. It allows user sign the message through farcaster frame and manage their portfolio through DeFiCaster.



# Structrue

This project has two main folders:

```bash
.
└── web
    ├── app
    └── src
```

[web](/web/README.md) folder contains all the frontend code


## Getting Started

#### Step 1: Obtain Wallet Connect Project ID from [walletconnect.com](https://cloud.walletconnect.com/sign-in) and assign to the `.env.local` file

```bash
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=ADD_WALLET_CONNECT_PROJECT_ID_HERE
```


#### Step 2: copy `./web/.env.local.example ./web/.env.local` and fill out the following parameters
```
# The bot to sign attestation, any ETH accounts
SIGN_BOT_PRIVATE_KEY=
# This bot is used to post attestations on Farcaster, FID and Key should match
FARCASTER_BOT_FID=
FARCASTER_BOT_PRIVATE_KEY=
NEXT_PUBLIC_SIGN_PROTOCOL_SCHEMA_ID_FARCASTER=
NEXT_PUBLIC_REACT_NEYNAR_API_KEY=
NEXT_PUBLIC_SIGN_SCAN_URL=
NEXT_PUBLIC_SIGN_SCAN_API_URL=
NEXT_PUBLIC_WEBSITE_URL=
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

