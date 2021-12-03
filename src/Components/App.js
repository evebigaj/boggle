
import {React, useState} from 'react'
import ReactDom from 'react-dom'
import './App.css';

import Board from './Board'
import Reset from './Reset'
import Score from './Score.js'
import Words from './Words'
import Form from './Form'

import {boggleAlphabet, initialBoard} from '../utils/board'
import {asyncFetchWord} from '../utils/dictionaryFetcher'
import countPoints from '../utils/scoreCounter'
import { existsStringPath } from '../utils/wordFinder';





const App = () => {

  const [board, setBoard] = useState(initialBoard);
  const [word, setWord] = useState('')
  const [words, setWords] = useState([])
  const [points, setPoints] = useState(0)

  function resetBoard(){
    let newBoard = []
    for(let rowIndex = 0; rowIndex<4; rowIndex++){
      let row = []
      let letterIndex = 0
     while(letterIndex<4){
      let letter = boggleAlphabet[Math.floor(Math.random()*26)]
      row.push(letter);
      letterIndex++
  }
    newBoard.push(row)
  }
    setBoard(newBoard);
    setWords([]);
    setPoints(0);
}
  
  const handleSubmit = (e) => {
    e.preventDefault();
  if(word.length >2 && existsStringPath(word.toUpperCase(), board) 
  && !words.includes(word.toUpperCase())){
   asyncFetchWord(word)
   .then(truthValue => {
     if(truthValue === true){
words.push(word.toUpperCase());
      setWords(words);
      setPoints(countPoints(words));
}})
.catch(error => Promise.reject())};

setWord('')}


// if(dictionaryResponse === true){ 
//   words.push(word.toUpperCase());
//       setWords(words);
//       setPoints(countPoints(words))
//     }}
//     setWord('')


  return <>
  <div id="main">
    <Board board={board}/>
    <section id="bottom">
      <section id="form-container">
       <Form onSubmit ={handleSubmit} word={word} 
        handleChange={(e) => setWord(e.target.value)}/>
      </section>
      <Reset onClick={resetBoard}/>
    </section>
    <section id="sidebar">
      <Score points={points}/>
      <Words words={words}/>
    </section>
  </div>
  </>
}

ReactDom.render(<App/>,document.getElementById('root'))

export default App;
