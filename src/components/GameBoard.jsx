import React from 'react';
import SingleWordRow from './SingleWordRow';

function GameBoard({ currentGuess, guesses, currentTurn }) {
  return (
    <div>
      {guesses.map((singleGuess, i) => {
        if (currentTurn === i) {
          return <SingleWordRow key={i} currentGuess={currentGuess} />;
        }
        return <SingleWordRow key={i} singleGuess={singleGuess} />;
      })}
    </div>
  );
}

export default GameBoard;
