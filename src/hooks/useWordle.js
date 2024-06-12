import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    // format guess into an array of letter objects
    const formatGuess = () => {

    }

    // add new guess to guesses state
    // update the isCorrect state if guess is correct
    // add one to turn state
    const addNewGuess = () => {

    }

    // handle keyup event and track current guess
    // if user presses enter, add new guess
    const handleKeyup = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle