import './App.css';
import Navigation from './components/NavBar';
import { useState } from 'react';

function App() {
  const [gridValues, setGridValues] = useState(Array(9).fill('Empty'));
  const [chosenShape, setChosenShape] = useState(null);
  const [reset, setReset] = useState(null);

  const chooseShape = (shape) => {
    setChosenShape(shape)
    console.log(shape)
  }
  
  const handleGridClick = (index) => {
    if (gridValues[index] === 'Empty' && chosenShape) {
      const newValues = [...gridValues];
      newValues[index] = chosenShape;
      setGridValues(newValues);

      const winner = checkForWinner(newValues);
      if (winner) {
        alert(`${winner} has won!`); // Display a popup announcing the winner
        setReset(setGridValues(Array(9).fill('Empty')));
      }
    }
  }

  const handleReset = () => {
    setReset(setGridValues(Array(9).fill('Empty')));
  }

  const checkForWinner = (squares) => {
    // Define the winning combinations
    const lines = [
      [0, 1, 2], // first row
      [3, 4, 5], // second row
      [6, 7, 8], // third row
      [0, 3, 6], // first column
      [1, 4, 7], // second column
      [2, 5, 8], // third column
      [0, 4, 8], // left-to-right diagonal
      [2, 4, 6], // right-to-left diagonal
    ];

    // Check for a winning combination
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] !== "Empty") {
        return squares[a]; // Return the winning shape (X or Y)
      }
    }

    return null; // No winner found
  };


  return (
    
    <div className="page">
      <Navigation></Navigation>
      <div className='choose-x'>
        <button onClick = {() => chooseShape('X')}>X</button>
        <button onClick = {() => chooseShape('Y')}>Y</button>
      </div>
      <div className = "centering-grid">
        <div className = "tic-grid">
          {gridValues.map((value, index) => (
            <button key={index} onClick={() => handleGridClick(index)}>
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className='reset-button'>
        <button onClick = {() => handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
