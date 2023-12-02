// The code is taken from:
// https://github.com/sindresorhus/uint8array-extras/
const byteToHexLookupTable = Array.from({length: 256}, (_, index) => index.toString(16).padStart(2, '0'));

function uint8ArrayToHex(array: Uint8Array): string {
    let hexString = '';

    for (let index = 0; index < array.length; index++) {
        hexString += byteToHexLookupTable[array[index]];
    }

    return hexString;
}

export {uint8ArrayToHex};
