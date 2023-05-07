import React from 'react';
import { StyledQwerty } from './styles/Qwerty.styled';

function Qwerty({ qwertyKeys }) {
  const qwerty = [
    [
      { key: 'q' },
      { key: 'w' },
      { key: 'e' },
      { key: 'r' },
      { key: 't' },
      { key: 'y' },
      { key: 'u' },
      { key: 'i' },
      { key: 'o' },
      { key: 'p' },
    ],
    [
      { key: 'a' },
      { key: 's' },
      { key: 'd' },
      { key: 'f' },
      { key: 'g' },
      { key: 'h' },
      { key: 'j' },
      { key: 'k' },
      { key: 'l' },
    ],
    [
      { key: 'z' },
      { key: 'x' },
      { key: 'c' },
      { key: 'v' },
      { key: 'b' },
      { key: 'n' },
      { key: 'm' },
    ],
  ];

  return (
    <StyledQwerty>
      <div className="keypad">
        {qwerty &&
          qwerty.map((row, key) => (
            <div className="singleRow letterRow" key={key}>
              {row.map((letter) => {
                const letterColor = qwertyKeys[letter.key];

                return (
                  <div key={letter.key} className={`qwertySingleLetter ${letterColor}`}>
                    {letter.key}
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </StyledQwerty>
  );
}

export default Qwerty;
