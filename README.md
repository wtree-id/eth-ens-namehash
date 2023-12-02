# Eth ENS Namehash Typescript (Fork)

A TypeScript library for generating Ethereum Name Service (ENS) namehashes per [spec](https://github.com/ethereum/EIPs/issues/137). Code is based on [eth-ens-namehash](https://github.com/Arachnid/eth-ens-namehash) by Nick Johnson.

[Available on NPM](https://www.npmjs.com/package/@wtree-id/eth-ens-namehash-ts)

## Installation

`npm install @wtree-id/eth-ens-namehash-ts`

## Usage

```typescript
import { hash, normalize } from '@wtree-id/eth-ens-namehash-ts'
const hash = hash('foo.eth')

// Also supports normalizing strings to ENS compatibility:
const input = getUserInput()
const normalized = normalize(input)
```

## Security Warning

ENS Supports UTF-8 characters, and so many duplicate names are possible. For example:

- faceboоk.eth
- facebook.eth

The first one has non-ascii chars. (control+F on this page and search for facebook, only the second one will match).

namehash.normalize() doesn't automagically remap those, and so other precautions should be taken to avoid user phishing.

## Development

This module supports advanced TypeScript syntax, but exports an ES5-compatible module. To re-build the exported module after making changes, run `npm run bundle` (must have [browserify](http://browserify.org/) installed).

