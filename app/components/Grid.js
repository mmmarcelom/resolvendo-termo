"use client"

export default function Grid({guessesState, setGuessesState}){
    
    function changeColor(wordIndex, letterIndex, color){
            
        const newGuessesState = {
            0: { ...guessesState[0], ...{ 1: { ...guessesState[0][1] } } },
            1: { ...guessesState[1], ...{ 1: { ...guessesState[1][1] } } },
            2: { ...guessesState[2], ...{ 1: { ...guessesState[2][1] } } },
            3: { ...guessesState[3], ...{ 1: { ...guessesState[3][1] } } },
            4: { ...guessesState[4], ...{ 1: { ...guessesState[4][1] } } },
            5: { ...guessesState[5], ...{ 1: { ...guessesState[5][1] } } },
        }
    
        newGuessesState[wordIndex][letterIndex]['color'] = getNextColor(color)
        setGuessesState(newGuessesState)
    }
    
    function getNextColor(color){
        if(color == 'cell') return 'cell-yellow'
        if(color == 'cell-yellow') return 'cell-green'
        if(color == 'cell-green') return 'cell-black'
        if(color == 'cell-black') return 'cell'
    }

    const renderList = [];
    for(let wordIndex = 0; wordIndex < 6; wordIndex++){
        
        const renderItens = []
        for(let letterIndex = 0; letterIndex < 6; letterIndex++){
            renderItens.push(
                <div 
                    key={letterIndex} 
                    className={guessesState[wordIndex][letterIndex]['color']}
                    onClick={()=>changeColor(wordIndex, letterIndex, guessesState[wordIndex][letterIndex]['color'])}
                >{guessesState[wordIndex][letterIndex]['letter']}
                </div>
            )
        }
        renderList.push(<div key={wordIndex} className="row">{renderItens}</div>)
    }

    return <div>{renderList}</div>

}
