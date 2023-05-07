import React from 'react';
import { StyledEndScreen } from './styles/EndScreen.styled';
import ContinueGuessingBtn from './ContinueGuessingBtn';

function EndScreen({
  isWon,
  currentTurn,
  word,
  continueGuessing,
  closeModal,
  randomizeAWord,
}) {
  let form;
  currentTurn === 1 ? (form = 'guess') : (form = 'guesses');

  return (
    <StyledEndScreen onClick={closeModal}>
      <div
        className="endScreen"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isWon && (
          <div>
            <h2>Congratulations!</h2>
            <p>
              You won with {currentTurn === 1 && 'just '}
              <b>{currentTurn}</b> {form}!
            </p>
            <p>
              The word was: <u>{word}</u>
            </p>
          </div>
        )}
        {!isWon && (
          <div>
            <h2>Better luck next time!</h2>
            <p>
              The word was: <u>{word}</u>
            </p>
          </div>
        )}

        <ContinueGuessingBtn
          continueGuessing={continueGuessing}
          randomizeAWord={randomizeAWord}
        />
      </div>
    </StyledEndScreen>
  );
}

export default EndScreen;
