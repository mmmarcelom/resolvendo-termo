
import { useState } from 'react'
import Cell from './Cell'

export default function Row({word}){

const letters = word.length === 5 ? word.split('') : '     '.split('')

return (
    <div className="row">
        {letters.map( (letter, index) => <Cell index={index} letter={letter} color={''}/> )}
    </div>
)
}