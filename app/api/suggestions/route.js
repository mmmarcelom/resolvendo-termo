import { NextResponse } from 'next/server'
import palavras from '../palavras.json'

export async function POST(request) {
    console.log('Request recebida...')

    const body = await request.json()
    const suggestion = body

    console.log('request.body: ' + suggestion['word'])
    
    return NextResponse.json(suggestion['word'] + ' modificado')
}