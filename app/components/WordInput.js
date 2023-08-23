'use client'
import { useState } from 'react';
import Grid from './Grid.js'

export default function WordInput(){

  function addGuess(){
    
    const newGuessesState = {
      0: { ...guesses[0], ...{ 1: { ...guesses[0][1] } } },
      1: { ...guesses[1], ...{ 1: { ...guesses[1][1] } } },
      2: { ...guesses[2], ...{ 1: { ...guesses[2][1] } } },
      3: { ...guesses[3], ...{ 1: { ...guesses[3][1] } } },
      4: { ...guesses[4], ...{ 1: { ...guesses[4][1] } } },
      5: { ...guesses[5], ...{ 1: { ...guesses[5][1] } } },
    };
    
    const newLettersArr = guess.split('')
  
    newGuessesState[guessNumber] = { 
      0: guess,
      1: { letter: newLettersArr[0], color:'cell' },
      2: { letter: newLettersArr[1], color:'cell' },
      3: { letter: newLettersArr[2], color:'cell' },
      4: { letter: newLettersArr[3], color:'cell' },
      5: { letter: newLettersArr[4], color:'cell' }
    }

    setGuesses(newGuessesState)
    setGuessNumber(guessNumber+1)
  }
  
  function generateGuessTemplate(){
    return {
      0: { 
        0: '     ',
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' },
        5: { letter: '', color:'cell' }
      },

      1: { 
        0: '     ',
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' },
        5: { letter: '', color:'cell' }
      },
  
      2: { 
        0: '     ',
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' },
        5: { letter: '', color:'cell' }
      },
  
      3: { 
        0: '     ',
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' },
        5: { letter: '', color:'cell' }
      },
  
      4: { 
        0: '     ',
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' },
        5: { letter: '', color:'cell' }
      },
  
      5: { 
        0: '     ',
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' },
        5: { letter: '', color:'cell' }
      }
    }
  }
  
  function inputChange(event){
    setGuess(event.target.value);
  }
  
  async function fetchCompatibleWords(){
  
    const res = await fetch('http://localhost:3000/api/suggestion', { 
      method: "POST", 
      body: JSON.stringify({'word': guess})
    })
  
    const response = await res.json()
  
    setCompatibleWords(response)
  }

  const [guesses, setGuesses ] = useState(generateGuessTemplate())
  const [guess, setGuess] = useState('')
  const [guessNumber, setGuessNumber] = useState(0)
  const [compatibleWords, setCompatibleWords] = useState(['CAIXA', 'AREIA', 'VULTO', 'JUSTO', 'CALVO', 'JESUS' ])

  return (
    <div>
      <Grid guessesState={guesses} setGuessesState={setGuesses} />
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