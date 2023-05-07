import React from 'react';

function ContinueGuessingBtn({ continueGuessing, randomizeAWord }) {
  return (
    <button
      type="button"
      className="continueGuessingBtn"
      onClick={() => {
        continueGuessing();
        randomizeAWord();
      }}
    >
      Continue
    </button>
  );
}

export default ContinueGuessingBtn;
