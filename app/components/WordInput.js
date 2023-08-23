'use client'
import { useState } from 'react';
import Grid from './Grid.js'

export default function WordInput(){

    const [compatibleWords, setCompatibleWords] = useState([
        'CAIXA',
        'AREIA',
        'VULTO',
        'JUSTO',
        'CALVO',
        'JESUS'
    ])

    const [guessNumber, setGuessNumber] = useState(0)
    const [guess, setGuess] = useState('')
    const [guesses, setGuesses] = useState([
        '',
        '',
        '',
        '',
        '',
        ''
    ])
  
  const addGuess = () => {
    const newGuesses = [...guesses]
    newGuesses[guessNumber] = guess
    setGuesses(newGuesses);
    setGuessNumber(guessNumber+1)
  };

  const inputChange = (event) => {
    setGuess(event.target.value);
  };
  
  const fetchCompatibleWords = async () => {

    const res = await fetch('http://localhost:3000/api/suggestion', { 
      method: "POST", 
      body: JSON.stringify({'word': guess})
    })

    const response = await res.json()

    setCompatibleWords(response)
  }

  return (
    <div>
      <Grid words={guesses}/>
      <div className='wordInput'>
        <input type='text' maxLength="5" placeholder={'Digite uma palavra'} value={guess} onChange={inputChange}/>
        <button onClick={addGuess}>Adicionar</button>
      </div>
      <h1>Respostas:</h1>
      <ul>
          {compatibleWords.map((word, index) => <li key={index}>{word}</li>)}
      </ul>
    </div>
  )

}