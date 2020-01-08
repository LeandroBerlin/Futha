//alphabeth
const alpha = [
    { space: '᛫' },
    { dot: '᛬' },
    { a: 'ᚨ' },
    { b: 'ᛒ' },
    { c: 'ᚲ' },
    { d: 'ᛞ' },
    { e: 'ᛖ' },
    { f: 'ᚠ' },
    { g: 'ᚷ' },
    { h: 'ᚻ' },
    { i: 'ᛁ' },
    { j: 'ᛃ' },
    { k: 'ᚲ' },
    { l: 'ᛚ' },
    { m: 'ᛗ' },
    { n: 'ᚾ' },
    { o: 'ᛟ' },
    { p: 'ᛈ' },
    { q: 'ᚲ' },
    { r: 'ᚱ' },
    { s: 'ᛊ' },
    { t: 'ᛏ' },
    { θ: 'ᚦ' },
    { u: 'ᚢ' },
    { v: 'ᚹ' },
    { w: 'ᚹ' },
    { x: 'ᚲᛊ' },
    { y: 'ᛃ' },
    { z: 'ᛉ' },
    { ä: 'ᛇ' },
    { ŋ: 'ᛝ' }
]
//Elder Futhark
const elder_futhark = [
    { rune: 'ᚠ', name: 'Fehu', meaning: 'Wealth, Cattle, the god Frey' },
    { rune: 'ᚢ', name: 'Uruz', meaning: 'Aurochs' },
    { rune: 'ᚦ', name: 'Thurisaz', meaning: 'the god Thor, Thorn, Giant' },
    { rune: 'ᚨ', name: 'Ansuz', meaning: 'the god Odin, Mouth, Divine Breath' },
    { rune: 'ᚱ', name: 'Raidho', meaning: 'Ride, journey' },
    { rune: 'ᚲ', name: 'Kenaz', meaning: 'Torch' },
    { rune: 'ᚷ', name: 'Gebo', meaning: 'Gift' },
    { rune: 'ᚹ', name: 'Wunjo', meaning: 'Joy' },
    { rune: 'ᚻ', name: 'Hagal', meaning: 'Hail, Hailstone' },
    { rune: 'ᚾ', name: 'Naudhiz', meaning: 'Need, Necessity' },
    { rune: 'ᛁ', name: 'Isa', meaning: 'Ice' },
    { rune: 'ᛃ', name: 'Jera', meaning: 'Year, Harvest' },
    { rune: 'ᛇ', name: 'Eihwaz', meaning: 'Yew-tree' },
    { rune: 'ᛈ', name: 'Perthro', meaning: '-' },
    { rune: 'ᛉ', name: 'Algiz', meaning: 'Protection, Shielding' },
    { rune: 'ᛊ', name: 'Sowelu', meaning: 'Sun' },
    { rune: 'ᛏ', name: 'Tiwaz', meaning: 'the god Tyr, Sacrifice' },
    { rune: 'ᛒ', name: 'Berkano', meaning: 'Birch' },
    { rune: 'ᛖ', name: 'Ehwaz', meaning: 'Morse' },
    { rune: 'ᛗ', name: 'Mannaz', meaning: 'Man' },
    { rune: 'ᛚ', name: 'Laguz', meaning: 'Water' },
    { rune: 'ᛝ', name: 'Ingwaz', meaning: 'the god Yngvi, Fertility' },
    { rune: 'ᛞ', name: 'Dagaz', meaning: 'Day' },
    { rune: 'ᛟ', name: 'Othala', meaning: 'Heritage, Estate, Possession' }
]

//the rune rappresenting an alphabeth letter
const alphaRune = char => {
    if (char === " ") char = "space"
    if (char === ".") char = "dot"
    for (var i = 0; i < alpha.length; i++) {
        if (alpha[i][char]) return alpha[i][char];
    }
}
//accept a rune and return the obj
const infoRune = c => elder_futhark.filter(r => r.rune === c)
//accept a string and traslate to runes
const stringFuthark = str => str.trim()
    .toLowerCase()
    .replace(/th/g, 'θ') // replace with þurisaz
    .replace(/ng/g, 'ŋ') // replace with ingwaz
    .replace(/\. /g, '.') // replace dot space
    .split('')
    .map(c => alphaRune(c))
    .join('')
//a random rune
const randomRune = () => elder_futhark[Math.floor(Math.random() * elder_futhark.length)];

module.exports = {
    infoRune,
    stringFuthark,
    randomRune
}