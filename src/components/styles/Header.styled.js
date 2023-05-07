import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  padding: 2rem;
  border-bottom: 0.5px solid gray;
  align-items: center;

  @media (max-width: 425px) {
    padding: 0.5rem 0.5rem;
  }

  .headerIcon {
    position: relative;
    font-size: 2rem;
    cursor: pointer;
    z-index: 20;

    &:hover {
      color: rgb(200, 200, 200);
    }

    &:active {
      color: rgb(175, 175, 175);
    }
  }

  .headerIconsGroup {
    @media (max-width: 425px) {
      gap: 3px;
    }

    display: flex;
    gap: 10px;
  }

  h1 {
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 2rem;
    margin: 0 auto;
  }
`;
