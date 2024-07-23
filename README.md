# bip39-cities-wordlist-js

JS version of the [BIP39 cities wordlist](https://github.com/Jaza/bip39-cities-wordlist).

Designed to be used with [scure-bip39](https://github.com/paulmillr/scure-bip39) to generate BIP39 compliant mnemonic phrases.

## Getting started

To work locally with this project, follow the steps below:

1. Fork, clone or download this project
1. `npm install`
1. Copy `.example.env` to `.env` and set variables as required

## Building

To build the project in JS: `npm run build`

## Testing

To run unit tests: `npm run test`

## Publishing new releases

1. Bump the version number in `package.json`
1. `npm run build`
1. `npm publish`
