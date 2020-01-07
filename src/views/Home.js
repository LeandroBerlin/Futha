import React from 'react'
import { infoRune, randomRune } from '../modules/futha'

export default function Home() {
    const test = infoRune('ᚲ')
    console.log(test)
    const random = randomRune()
    return (

        <main className="Futha-main">
            <div className="content">
                <h1 className="rune">{random.rune}</h1>
                <div className="name">
                    {random.name}
                </div>
                <i>"{random.meaning}"</i>

            </div>
        </main>
    )
}
