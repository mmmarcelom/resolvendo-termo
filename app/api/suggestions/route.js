import { NextResponse } from 'next/server'
import palavras from '../palavras.json'

export async function POST(request) {

    const body = await request.json()

    let existentes = []
    let incorretas = []
    let corretas = []

    for(let wordIndex = 0; wordIndex < 6; wordIndex++){
        for(let letterIndex = 0; letterIndex < 5; letterIndex++){

            let letter = body[wordIndex][letterIndex]['letter']
            let color = body[wordIndex][letterIndex]['color']

            if(color === 'cell-black') incorretas.push(letter.toUpperCase())
            if(color === 'cell-yellow') existentes.push([letterIndex, letter.toUpperCase()])
            if(color === 'cell-green') corretas.push([letterIndex, letter.toUpperCase()])
        }
    }

    let listaPalavras = [...palavras]

    listaPalavras = checkIncorretas(incorretas, listaPalavras)
    listaPalavras = checkExistentes(existentes, listaPalavras)
    listaPalavras = checkCorretas(corretas, listaPalavras)

    return NextResponse.json(listaPalavras.slice(0,50))
}

function checkIncorretas(arrIncorretas, arrPalavras){
    
    let palavrasCompativeis = []
    for(const palavra of arrPalavras){
        let compativel = true
        
        for(const letra of arrIncorretas){
            if(palavra.includes(letra)){
                compativel = false
            }
        }

        if(compativel) palavrasCompativeis.push(palavra)
    }

    return palavrasCompativeis
}

function checkExistentes(arrExistentes, arrPalavras){
    
    let palavrasCompativeis = []
    for (const palavra of arrPalavras){
        
        let compativel = true
        
        for(let arr of arrExistentes){
            
            let posicao = arr[0]
            let letra = arr[1]
                        
            if(palavra[posicao] == letra || !(palavra.includes(letra))) compativel = false
        }
        
        if(compativel) palavrasCompativeis.push(palavra)
    }

    return palavrasCompativeis

}

function checkCorretas(arrCorretas, arrPalavras){

    let palavrasCompativeis = []
    for (const palavra of arrPalavras){
        
        let compativel = true
        
        for(let arr of arrCorretas){
            
            let posicao = arr[0]
            let letra = arr[1]
                        
            if(palavra[posicao] != letra) compativel = false
        }
        
        if(compativel) palavrasCompativeis.push(palavra)
    }

    return palavrasCompativeis

}