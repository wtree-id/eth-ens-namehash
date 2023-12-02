import { hash, normalize } from '../src'

// Test results specified in original ENS Proposal:
// https://github.com/ethereum/EIPs/issues/137

test('empty name', () => {
  const input = ''
  const expected = '0x0000000000000000000000000000000000000000000000000000000000000000'
  const output = hash(input)

  expect(output).toBe(expected)
})

test('empty param', () => {
  const expected = '0x0000000000000000000000000000000000000000000000000000000000000000'
  const output = hash('')

  expect(output).toBe(expected)
})

test('TLD eth', () => {
  const input = 'eth'
  const expected = '0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae'
  const output = hash(input)
  expect(output).toBe(expected)
})

test('foo.eth', () => {
  const input = 'foo.eth'
  const expected = '0xde9b09fd7c5f901e23a3f19fecc54828e9c848539801e86591bd9801b019f84f'
  const output = hash(input)
  expect(output).toBe(expected)
})

test('normalize ascii domain', () => {
  const input = 'foo.eth' // latin chars only
  const expected = 'foo.eth'
  const output = normalize(input)
  expect(output).toBe(expected)
})


test('normalize international domain', () => {
  const input = 'fоо.eth' // with cyrillic 'o'
  const expected = 'fоо.eth'
  const output = normalize(input)
  expect(output).toBe(expected)
})

test('normalize capitalized domain', () => {
  const input = 'Foo.eth' // latin chars only
  const expected = 'foo.eth'
  const output = normalize(input)
  expect(output).toBe(expected)
})

test('normalize emoji domain', () => {
  const input = '🦚.eth'
  const expected = '🦚.eth'
  const output = normalize(input)
  expect(output).toBe(expected)
})
