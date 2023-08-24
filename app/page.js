'use client'

import { useState } from 'react';

import Grid from './components/Grid.js'
import WordInput from './components/WordInput.js'
import WordList from './components/WordList'

export default function Home() {
  
  function generateGuessTemplate(){
    return {
      0: { 
        0: { letter: '', color:'cell' },
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' }
      },
      
      1: { 
        0: { letter: '', color:'cell' },
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' }
      },
      
      2: { 
        0: { letter: '', color:'cell' },
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' }
      },
      
      3: { 
        0: { letter: '', color:'cell' },
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' }
      },
      
      4: { 
        0: { letter: '', color:'cell' },
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' }
      },
      
      5: { 
        0: { letter: '', color:'cell' },
        1: { letter: '', color:'cell' },
        2: { letter: '', color:'cell' },
        3: { letter: '', color:'cell' },
        4: { letter: '', color:'cell' }
      }
    }
  }
  
  async function fetchCompatibleWords(){

    console.log('fetchCompatibleWords com:')
    console.log(JSON.stringify(guesses))
    
    const res = await fetch('https://resolvendo-termo.vercel.app/api/suggestions', { 
      method: "POST", 
      body: JSON.stringify(guesses)
    })
    
    const response = await res.json()
    console.log(`Recebendo ${response.length}`)

    setCompatibleWords(response)
    console.log(compatibleWords)
  }

  function addGuess(){
    console.log(`Adicionando "${guess}" na linha ${guessNumber}`)
    
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
      0: { letter: newLettersArr[0], color:'cell' },
      1: { letter: newLettersArr[1], color:'cell' },
      2: { letter: newLettersArr[2], color:'cell' },
      3: { letter: newLettersArr[3], color:'cell' },
      4: { letter: newLettersArr[4], color:'cell' }
    }

    setGuesses(newGuessesState)
    setGuessNumber(guessNumber+1)
  }

  const [guesses, setGuesses ] = useState(generateGuessTemplate())
  const [guess, setGuess] = useState('')
  const [guessNumber, setGuessNumber] = useState(0)
  const [compatibleWords, setCompatibleWords] = useState(null)
  
  return (
    <main>
      <h1 className='titulo'>SOLUÇÃO</h1>
      <div className='conteudo'>
        <Grid 
          guessesState={guesses} 
          setGuessesState={setGuesses}
          fetchCompatibleWords={fetchCompatibleWords}
        />
        <div className='wordInput'>
          <WordInput
            compatibleWordsState={compatibleWords} 
            guessState={guess}
            setGuessState={setGuess}
            addGuess={addGuess}
          />
          <WordList compatibleWords={compatibleWords}/>
        </div>
      </div>
    </main>
  )
}