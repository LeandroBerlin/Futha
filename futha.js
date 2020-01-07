'use strict'

const alpha = [
    { a: '' },
    { b: '' },
    { c: '' },
    { d: '' },
    { e: '' },
    { f: '' },
    { g: '' },
    { h: '' },
    { i: '' },
    { j: '' },
    { k: '' },
    { l: '' },
    { m: '' },
    { n: '' },
    { o: '' },
    { p: '' },
    { q: '' },
    { r: '' },
    { s: '' },
    { t: '' },
    { u: '' },
    { v: '' },
    { w: '' },
    { x: '' },
    { y: '' },
    { z: '' }]

const Maybe = x => ({
    map: f => Maybe(nullCheck(x) ? null : f(x)),
    fold: f => (nullCheck(x) ? null : f(x))
})

const nullCheck = x => (x === null || x === undefined)

// toRunicode :: String -> String
const toRunicode = str =>
    Maybe(str)
        .map(s => typeof s === 'string' ? s : null)
        .map(s => s.toLowerCase())
        .map(s => s.split(''))
        .map(s => s.map(c => (dict[c] ? String.fromCharCode(dict[c]) : c)))
        .fold(s => s.join(''))

module.exports = toRunicode