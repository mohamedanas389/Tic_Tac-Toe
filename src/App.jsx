import { useState } from "react";
import './App.css'
function App(){
  const [board,setBoard]=useState(Array(9).fill(null));
  const[isXturn,setIsXturn]=useState(true);
  const winner=calculateWinner(board);
  const isDraw=!winner && board.every(cell=>cell!==null);
  function handleClick(index){
    if(board[index]||winner){
      return;
    }
    
    const newBoard=[...board];
    newBoard[index]=isXturn?"X":"O";
    setBoard(newBoard);
    setIsXturn(!isXturn);
  }
    function restartGame(){
      setBoard(Array(9).fill(null));
      setIsXturn(true);
    }

  
  return(
    
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <h2>{winner?`Winner:${winner}`:isDraw ? "Match Draw!" : `Turn :${isXturn?"X":"O"}`}</h2>
      <div className="board">
        {board.map((value,index)=>(
          <button className="cell" key={index} onClick={()=>{handleClick(index)}}>{value}</button>
        ))}
      </div>
      <button className="restart" onClick={restartGame}>Restart Game</button>

    </div>
    // {/* <h1>Hello guys</h1> */}

    
  )
}
  function calculateWinner(board){
    const winningPatterns=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let pattern of winningPatterns){
      const [a,b,c]=pattern;
      if(board[a]&& board[a]===board[b]&&board[a]===board[c]){
        return board[a];
      }
    }
    return null;
  }

export default App;