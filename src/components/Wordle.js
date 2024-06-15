import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid.js'
import Keypad from './Keypad.js'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect || turn > 5) {
            window.removeEventListener('keyup', handleKeyup)
        }

        // if (turn > 5) {
        //     window.removeEventListener('keyup', handleKeyup)
        // }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return (
        <div>
            <div>solution - {solution}</div>
            <div>current guess - {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}
