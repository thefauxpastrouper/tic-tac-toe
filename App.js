import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isxnext, setxnext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  let winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isxnext ? "X" : "O");
  }

  function handleClick({ value }) {
    if (squares[value] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (isxnext) {
      nextSquares[value] = "X";
    } else {
      nextSquares[value] = "O";
    }
    setxnext(!isxnext);
    setSquares(nextSquares);
  }

  function Mybutton({ value, onpress }) {
    return (
      <button
        style={{
          backgroundColor: "ActiveBorder",
          borderColor: "palegreen",
          color: "palegreen",
          height: "80px",
          width: "80px",
          fontSize: "30px",
          borderWidth: "3px",
        }}
        onClick={onpress}
      >
        {squares[value]}
      </button>
    );
  }
  return (
    <div
      style={{
        background: "black",
        color: "palegreen",
        font: "sans-serif",
        text: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      className="App"
    >
      <div>
        <h1>Tic-Tac-Toe</h1>
        <h2>Let's Play</h2>
      </div>
      <div style={{ fontSize: "20px", fontStyle: "italic" }}>
        {status}
        <br />
        <br />
      </div>

      <div>
        <Mybutton value={0} onpress={() => handleClick({ value: 0 })} />
        <Mybutton value={1} onpress={() => handleClick({ value: 1 })} />
        <Mybutton value={2} onpress={() => handleClick({ value: 2 })} />
      </div>
      <div>
        <Mybutton value={3} onpress={() => handleClick({ value: 3 })} />
        <Mybutton value={4} onpress={() => handleClick({ value: 4 })} />
        <Mybutton value={5} onpress={() => handleClick({ value: 5 })} />
      </div>
      <div>
        <Mybutton value={6} onpress={() => handleClick({ value: 6 })} />
        <Mybutton value={7} onpress={() => handleClick({ value: 7 })} />
        <Mybutton value={8} onpress={() => handleClick({ value: 8 })} />
        <br />
        <br />
        <button
          style={{
            fontSize: "20px",
            fontStyle: "bold",
            backgroundColor: "ActiveBorder",
            borderColor: "palegreen",
            color: "palegreen",
            height: "40px",
            width: "80px",
            fontSize: "19px",
            borderWidth: "3px",
          }}
          onClick={() => setSquares(Array(9).fill(null))}
        >
          Reset
        </button>
      </div>
    </div>
  );

  function calculateWinner(squares) {
    const lists = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lists.length; i++) {
      const [a, b, c] = lists[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
