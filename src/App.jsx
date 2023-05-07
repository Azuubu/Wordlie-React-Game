import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import WordlieList from './WordsList';
import useWordlieLogic from './hooks/useWordlieLogic';

function App() {
  const { toggleDevMode, isDevModeOn } = useWordlieLogic();
  const [randomWord, setRandomWord] = useState(
    WordlieList[Math.round(Math.random() * WordlieList.length)]
  );

  function randomizeAWord() {
    setRandomWord(WordlieList[Math.round(Math.random() * WordlieList.length)]);
  }

  return (
    <div className="app">
      <Header isDevModeOn={isDevModeOn} toggleDevMode={toggleDevMode} />
      {randomWord && (
        <MainContent
          word={randomWord}
          isDevModeOn={isDevModeOn}
          toggleDevMode={toggleDevMode}
          randomizeAWord={randomizeAWord}
        />
      )}
    </div>
  );
}

export default App;
