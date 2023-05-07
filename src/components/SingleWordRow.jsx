import React from 'react';
import { StyledSingleWordRow } from './styles/SingleWordRow.styled';

function SingleWordRow({ singleGuess, currentGuess }) {
  if (singleGuess) {
    return (
      <StyledSingleWordRow>
        <div className="singleRow past inRowAnima">
          {singleGuess.map((letter, i) => (
            <div key={i} className={`singleLetterCell ${letter.color}`}>
              {letter.key}
            </div>
          ))}
        </div>
      </StyledSingleWordRow>
    );
  }

  if (currentGuess) {
    let currentGuessLetters = currentGuess.split('');
    return (
      <StyledSingleWordRow>
        <div className="singleRow currentRow">
          {currentGuessLetters.map((letter, i) => (
            <div key={i} className="doneLetter singleLetterCell">
              {letter}
            </div>
          ))}
          {[...Array(5 - currentGuessLetters.length)].map((v, i) => (
            <div key={i} className="singleLetterCell"></div>
          ))}
        </div>
      </StyledSingleWordRow>
    );
  }

  return (
    <StyledSingleWordRow>
      <div className="singleRow">
        <div className="singleLetterCell"></div>
        <div className="singleLetterCell"></div>
        <div className="singleLetterCell"></div>
        <div className="singleLetterCell"></div>
        <div className="singleLetterCell"></div>
      </div>
    </StyledSingleWordRow>
  );
}

export default SingleWordRow;
