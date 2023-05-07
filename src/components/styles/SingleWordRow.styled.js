import styled from 'styled-components';

export const StyledSingleWordRow = styled.div`
  .singleRow {
    display: flex;
    text-align: center;
    justify-content: center;

    .singleLetterCell {
      display: block;

      width: 55px;
      height: 55px;

      border: 2px solid gray;

      padding: 3px;
      margin: 3px;

      text-align: center;

      text-transform: uppercase;
      font-weight: bold;
      font-size: 2.2rem;
    }
  }
`;
