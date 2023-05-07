import styled from 'styled-components';

export const StyledEndScreen = styled.div`
  background: rgb(65, 65, 65, 0.6);

  padding: 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .endScreen {
    display: flex;
    flex-direction: column;

    max-width: 450px;
    background: black;

    border-radius: 10px;
    padding: 3rem 4rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 1rem;
  }
`;
