import fs from 'fs'
import { compile } from '../src/compiler/index'

const antani  = fs.readFileSync(__dirname + '/keks/antani.kek',  'utf8')
const ricetta = fs.readFileSync(__dirname + '/keks/ricetta.kek', 'utf8')

test('Testing Antani.kek', () => {
  const result   = compile(antani);
  const noHashes = result.indexOf('#') === -1
  const noSlahN  = result.match(/\n/gi)
  expect(noHashes).toBeTruthy()
  expect(noSlahN).toBeFalsy()
})

test('Testing Ricetta.kek', () => {
  const result = compile(ricetta);
  const noHashes = result.indexOf('#') === -1  
  expect(noHashes).toBeTruthy()
  expect(noSlahN).toBeFalsy()
})