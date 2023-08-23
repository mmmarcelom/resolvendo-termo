export default function Cell({letterState, colorState, setColorState, index}){

    const changeColor = function() {
        if(colorState === 'cell') setColorState('cell-black')
        if(colorState === 'cell-black') setColorState('cell-yellow')
        if(colorState === 'cell-yellow') setColorState('cell-green')
        if(colorState === 'cell-green') setColorState('cell')
    }

    return (<div key={index} className={colorState} onClick={changeColor}>{letterState}</div>)
}