const fs = require('fs')
import * as compiler from './src/compiler/index'

const kek = fs.readFileSync('./tests/keks/ricetta.kek', 'utf8')
const res = compiler.compile(kek)

console.log(res)