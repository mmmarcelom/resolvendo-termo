import { useState } from 'react'

export default function Cell({letter, index}){

    const [color, setColor] = useState('cell')
    //const [letter, setLetter] = useState('')

    const changeColor = function() {
        if(color === 'cell') setColor('cell-black')
        if(color === 'cell-black') setColor('cell-yellow')
        if(color === 'cell-yellow') setColor('cell-green')
        if(color === 'cell-green') setColor('cell')
    }

    return (<div key={index} className={color} onClick={changeColor}>{letter}</div>)
}