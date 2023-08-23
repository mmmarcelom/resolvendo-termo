
import { useState } from 'react'
import Cell from './Cell'

export default function Row({guessesState, setGuessesState}){

return (
    <div className="row">
        {guessesState.map( (letter, index) => <Cell index={index} letter={letter} color={''}/> )}
    </div>
)
}