import React from 'react'
import Row from './Row.js'

export default function Grid({ currentGuess, guesses, turn }) {
    return (
        <div>
            {guesses.map((g, i) => {
                return <Row key={i} guess={g} />
            })}
        </div>
    )
}
