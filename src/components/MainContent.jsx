import React, { useEffect } from 'react';
import { StyledMainContent } from './styles/MainContent.styled';
import EndScreen from './EndScreen';
import useWordlieLogic from '../hooks/useWordlieLogic';
import GameBoard from './GameBoard';
import Qwerty from './Qwerty';
import ContinueGuessingBtn from './ContinueGuessingBtn';
import Confetti from './Confetti';
import { ToastContainer } from 'react-toastify';

function MainContent({ word, isDevModeOn, randomizeAWord }) {
  const {
    currentGuess,
    handleKeyUp,
    guesses,
    isWon,
    currentTurn,
    qwertyKeys,
    continueGuessing,
    endScreenShown,
    isContinueBtnShown,
    setEndScreenShown,
    setIsContinueBtnShown,
    showConfetti,
    setShowConfetti,
    endGameTimeoutTime,
  } = useWordlieLogic(word);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    if (isWon || currentTurn > 5) {
      window.removeEventListener('keyup', handleKeyUp);
    }
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp, isWon, currentTurn]);

  useEffect(() => {
    if (isWon || currentTurn > 5) {
      setTimeout(() => setEndScreenShown(true), endGameTimeoutTime);
      setTimeout(() => setIsContinueBtnShown(true), endGameTimeoutTime);
    }
  }, [isWon, currentTurn]);

  useEffect(() => {
    if (isWon) {
      setTimeout(() => setShowConfetti(true), endGameTimeoutTime);
    }
  }, [isWon]);

  return (
    <StyledMainContent>
      {isDevModeOn && (
        <div className="devModeHeader">
          <p>A word to guess: {word}</p>
          <p>Current Guess: {currentGuess}</p>
        </div>
      )}
      <GameBoard
        currentGuess={currentGuess}
        guesses={guesses}
        currentTurn={currentTurn}
      />
      <Qwerty qwertyKeys={qwertyKeys} />

      {endScreenShown && (
        <EndScreen
          isWon={isWon}
          currentTurn={currentTurn}
          word={word}
          continueGuessing={continueGuessing}
          closeModal={() => setEndScreenShown(false)}
          randomizeAWord={randomizeAWord}
        />
      )}

      {isContinueBtnShown && (
        <ContinueGuessingBtn
          continueGuessing={continueGuessing}
          randomizeAWord={randomizeAWord}
        />
      )}
      {showConfetti && <Confetti />}
      <ToastContainer
        limit={0}
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </StyledMainContent>
  );
}
export default MainContent;
