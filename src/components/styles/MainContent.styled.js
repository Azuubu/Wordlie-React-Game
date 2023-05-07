import styled from 'styled-components';

export const StyledMainContent = styled.div`
  margin: 0 auto 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    width: 90vw;
    padding: 0;
  }
`;
