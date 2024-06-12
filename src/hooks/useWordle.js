import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    // format guess into an array of letter objects
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => { // l for letter
            return {key: l, color: 'gray'}
        })

        // find green letters (correct position)
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        // find yellow matches
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // add new guess to guesses state
    // update the isCorrect state if guess is correct
    // add one to turn state
    const addNewGuess = () => {

    }

    // handle keyup event and track current guess
    // if user presses enter, add new guess
    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            // only add guess if turn is less than 5
            if (turn > 5) {
                console.log('No guesses left')
                return
            }
            // do not allow duplicate words
            if (history.includes(currentGuess)) {
                console.log('Already guessed')
                return
            }
            // word must be 5 characters long
            if (currentGuess.length !== 5) {
                console.log('Word must only be 5 characters')
                return
            }
            const formatted = formatGuess() // call if all conditions are met
        }
        if (key === 'Back') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return 
        }
        if (/^[A-Za-z]$/.test(key)) { // check that pressed key is a character and not a key such as 'Shift"
            if (currentGuess.length < 5) { 
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle