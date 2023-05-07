import styled from 'styled-components';

export const StyledQwerty = styled.div`
  margin: 2rem 0 0 0;
  user-select: none;

  .singleRow {
    display: flex;
    justify-content: center;
  }

  .qwertySingleLetter {
    @media (max-width: 424px) {
      padding: 20px 13px;
    }

    @media (max-width: 319px) {
      width: 25px;
      padding: 20px 5px;
    }

    display: flex;
    background-color: black;
    color: whitesmoke;

    margin: 1px;
    padding: 20px;
    width: 30px;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
  }
`;
