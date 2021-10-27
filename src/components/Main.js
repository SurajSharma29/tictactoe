import React, { useState } from "react";
import { Board } from "./Board";
import { calculateWinner } from "./Check";
const styles = {
  width: "200px",
  margin: "20px auto",
};
function Main() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  // const jumpTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner ? "Winner" + winner : "next player " + (xIsNext ? "X" : "O")}
          {renderMoves()}
        </p>
      </div>
    </>
  );
}

export default Main;
