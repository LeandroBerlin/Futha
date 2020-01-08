import React, { useState, useEffect } from 'react'
import { stringFuthark } from '../modules/futha'

export default function Type() {

    const [text, setText] = useState('')
    const [futha, setFutha] = useState('')

    useEffect(() => {
        const newFutha = stringFuthark(text)
        console.log(newFutha)
        function updateState() {
            if (newFutha !== futha) {
                setFutha(newFutha)
                console.log("updated")
                console.log(text)
            }

        }
        updateState()
    })

    return (
        <main className="Futha-main">

            <div className="content">
                <div className="counter">{futha &&
                    (
                        <small><span className="badge badge-danger">{futha.length}</span> runes written</small>
                    )

                }</div>
                <h1>Convert to Runes</h1>

                <form>
                    <div className="form-group">
                        <input type="text" value={text} className="form-control inputFutha" onChange={(e) => setText(e.target.value)} aria-describedby="text2futhark" placeholder="Type your text" />
                        <small className="form-text text-muted">Type the text you want to convert to Elder Futhark</small>
                    </div>

                </form>
                <div className="futhark">{futha}</div>
            </div>
        </main>
    )
}
