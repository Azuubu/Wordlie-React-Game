import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WordlieList from '../WordsList';

function useWordlieLogic(word) {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [isWon, setIsWon] = useState(false);
  const [qwertyKeys, setQwertyKeys] = useState({});

  const [endScreenShown, setEndScreenShown] = useState(false);
  const [isContinueBtnShown, setIsContinueBtnShown] = useState(false);

  const [isHelpOn, setIsHelpOn] = useState(false);
  const [isLeaderboardOn, setIsLeaderboardOn] = useState(false);
  const [isSettingOn, setIsSettingOn] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [isDevModeOn, setIsDevModeOn] = useState(false);

  const endGameTimeoutTime = 2200;

  const wrongGuessNotification = () => toast('Wrong Word');
  const notEnoughLettersNotification = () => toast('Not enough letters');

  function continueGuessing() {
    setIsWon(false);
    setEndScreenShown(false);
    setIsContinueBtnShown(false);

    setCurrentGuess('');
    setCurrentTurn(0);
    setGuesses([...Array(6)]);
    setQwertyKeys({});

    setShowConfetti(false);
  }

  function formatGuess() {
    let guessArray = [...word];
    let ourGuess = [...currentGuess].map((singleLetter) => ({
      key: singleLetter,
      color: 'black',
    }));

    ourGuess.forEach((singleLetter, i) => {
      if (guessArray[i] === singleLetter.key) {
        ourGuess[i].color = 'green';
        guessArray[i] = null;
      }
    });

    ourGuess.forEach((singleLetter, i) => {
      if (guessArray.includes(singleLetter.key) && singleLetter.color !== 'green') {
        ourGuess[i].color = 'yellow';
        guessArray[guessArray.indexOf(singleLetter.key)] = null;
      }
    });
    return ourGuess;
  }

  function addNewGuess(letterArray) {
    if (currentGuess === word) {
      setIsWon(true);
    }

    if (WordlieList.includes(currentGuess)) {
      setGuesses((prevGuesses) => {
        let newGuesses = [...prevGuesses];
        newGuesses[currentTurn] = letterArray;
        return newGuesses;
      });
      setCurrentTurn((prevTurn) => prevTurn + 1);

      setQwertyKeys((prevKeys) => {
        let newQwertyKeys = { ...prevKeys };

        letterArray.forEach((letter) => {
          const currentColor = newQwertyKeys[letter.key];

          if (letter.color === 'green') {
            newQwertyKeys[letter.key] = 'green';
            return;
          }
          if (letter.color === 'yellow' && currentColor !== 'green') {
            newQwertyKeys[letter.key] = 'yellow';
            return;
          }
          if (
            letter.color === 'black' &&
            currentColor !== 'green' &&
            currentColor !== 'yellow'
          ) {
            newQwertyKeys[letter.key] = 'black';
            return;
          }
        });
        return newQwertyKeys;
      });

      setCurrentGuess('');
    } else wrongGuessNotification();
  }

  function handleKeyUp({ key }) {
    if (key === 'Enter' && currentTurn < 6 && currentGuess.length === 5) {
      const formattedOne = formatGuess();
      addNewGuess(formattedOne);
      return;
    }

    if (key === 'Enter' && currentTurn < 6 && currentGuess.length !== 5) {
      notEnoughLettersNotification();
      return;
    }

    if (key === 'Backspace') {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, prevGuess.length - 1));
      return;
    }

    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prevGuess) => prevGuess + key.toLowerCase());
      return;
    }
  }

  // Header modals ===

  function openHelp() {
    setIsHelpOn((prev) => !prev);
    setIsLeaderboardOn(false);
    setIsSettingOn(false);
  }

  function openLeaderboard() {
    setIsHelpOn(false);
    setIsLeaderboardOn((prev) => !prev);
    setIsSettingOn(false);
  }

  function openSettings() {
    setIsHelpOn(false);
    setIsLeaderboardOn(false);
    setIsSettingOn((prev) => !prev);
  }

  function toggleDevMode() {
    setIsDevModeOn((prev) => !prev);
  }

  return {
    currentTurn,
    currentGuess,
    guesses,
    handleKeyUp,
    isWon,
    qwertyKeys,
    continueGuessing,
    endScreenShown,
    isContinueBtnShown,
    setEndScreenShown,
    setIsContinueBtnShown,
    showConfetti,
    setShowConfetti,
    endGameTimeoutTime,
    isHelpOn,
    setIsHelpOn,
    isLeaderboardOn,
    setIsLeaderboardOn,
    isSettingOn,
    setIsSettingOn,
    openHelp,
    openSettings,
    openLeaderboard,
    isDevModeOn,
    setIsDevModeOn,
    toggleDevMode,
  };
}
export default useWordlieLogic;
