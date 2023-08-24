export default function WordList({compatibleWords}){
    const sugestoes = [
        'AMENO',
        'ANIME',
        'ÁUDIO',
        'ÁUREO',
        'EIRAS',
        'MEIAS',
        'MENOS',
        'MUNDO',
        'REAIS',
        'REINO',
        'ROSNA',
        'RÁDIO',
        'SERIA',
        'SOMAR',
        'SÉRIO'
    ]

    return <div className='wordInput-respostas'>
        <h2>Palavras possíveis: {compatibleWords ? compatibleWords.length : 5481}</h2>
        <h3>Exemplos:</h3>
        <ul>
        { 
            compatibleWords 
            ? compatibleWords.map((word, index) => <li key={index}>{word}</li>)
            : sugestoes.map((word, index) => <li key={index}>{word}</li>)
        }
        </ul>
    </div>
}