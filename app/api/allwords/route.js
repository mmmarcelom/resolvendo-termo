import { NextResponse } from 'next/server'
import palavras from '../palavras.json'

export async function GET(request) {
    return NextResponse.json(palavras)
}