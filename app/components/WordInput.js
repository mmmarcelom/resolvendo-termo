

export default function WordInput({guessState, setGuessState, addGuess}){

  function inputChange(event){
    setGuessState(event.target.value);
  }

  return (
      <div className='wordInput-input'>
        <input type='text' maxLength="5" placeholder={'Digite aqui'} value={guessState} onChange={inputChange}/>
        <button onClick={addGuess}>Adicionar</button>
      </div>
  )

}