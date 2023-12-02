import { keccak_256 } from '@noble/hashes/sha3';
import { toUnicode } from 'idna-uts46-hx/dist/index.cjs';
import { uint8ArrayToHex } from './uint8Helpers';

function namehash(inputName: string): string {
  // We'll write the hash to this array. The hash is 32 bytes (256 bits) long.
  let node = new Uint8Array(32);

  const name = normalize(inputName);
  if (name) {
    const labels = name.split('.');

    for (let i = labels.length - 1; i >= 0; i--) {
      const labelHash = keccak_256(labels[i]);
      // Two hashes are 64 bytes long, so we need to create a new array that is 64 bytes long.
      const nodeWithLabel = new Uint8Array(64);
      nodeWithLabel.set(node, 0);
      nodeWithLabel.set(labelHash, 32);
      node = keccak_256(nodeWithLabel);
    }
  }

  return `0x${uint8ArrayToHex(node)}`;
}

function normalize(name: string): string {
  return name ? toUnicode(name, { useStd3ASCII: true }) : name;
}

export { normalize, namehash as hash };
