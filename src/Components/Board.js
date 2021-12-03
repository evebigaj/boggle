import React from 'react'
import Letter from './Letter'

const Board = (props) => { 
  let flattenedBoard = []
  for(let i=0; i<4;i++){
    flattenedBoard = flattenedBoard.concat(props.board[i])
  }
  return <div id="board">
    {flattenedBoard.map((letter, index) => <Letter key={index} letter={letter}/>)}
  </div>
}


export default Board