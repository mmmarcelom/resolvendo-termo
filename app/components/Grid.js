"use client"
import Row from './Row'

export default function Grid({words}){
return (
    <div>
        { words.map( (word, index) => <Row key={index} word={word}/> )}
    </div>
)
}