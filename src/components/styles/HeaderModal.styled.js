import styled from 'styled-components';

export const StyledHeaderModal = styled.div`
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
  z-index: 15;

  .headerModal {
    border-radius: 10px;
    background: black;
    display: flex;
    flex-direction: column;
    position: relative;

    max-width: 450px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }

  .headerModalCloseIcon {
    position: absolute;
    top: 7px;
    right: 9px;

    cursor: pointer;

    &:hover {
      color: rgb(200, 200, 200);
    }

    &:active {
      color: rgb(175, 175, 175);
    }
  }

  // === HELP MODAL ===
  .helpModal {
    animation: fadeIn 0.5s;
    padding: 3rem 4rem;

    @media (max-width: 374px) {
      padding: 3rem 2.5rem;
    }

    header {
      margin-bottom: 1rem;

      h3 {
        font-size: 1.7rem;
        font-family: poppins, sans-serif;
      }
      div {
        font-family: poppins, sans-serif;
      }
    }

    ul {
      margin-bottom: 1rem;
      li {
        margin-bottom: 0.4rem;
      }
    }

    .showcaseSection {
      margin-bottom: 1rem;

      .examplesHeader {
        margin-bottom: 0.4rem;
      }

      .singleSegment {
        margin-bottom: 1rem;
      }

      .singleRow {
        display: flex;
        text-align: center;

        .singleLetterCell {
          display: block;

          width: 35px;
          height: 35px;

          border: 2px solid gray;

          padding: 3px;
          margin: 3px;

          text-align: center;

          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.3rem;
        }
      }
    }

    footer {
      margin: 1rem 0 1rem;
      .goodLuck {
        margin-top: 0.5rem;
        font-weight: 600;
        font-size: 1.1rem;
      }
    }
  }

  .noMarginLeft {
    margin-left: 0 !important;
  }

  // === LEADERBOARD MODAL ===
  .leaderboardModal {
    animation: fadeIn 0.5s;
    padding: 3rem 4rem;

    @media (max-width: 420px) {
      padding: 3rem 1rem;
    }

    .totalPlaytime {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }

    header {
      margin-bottom: 1rem;

      h3 {
        font-size: 1.7rem;
        font-family: poppins, sans-serif;
      }
      div {
        font-family: poppins, sans-serif;
      }
    }

    .marginBottom {
      margin-bottom: 1rem;
    }

    .stats {
      display: flex;
    }

    .statGroup {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 0.5rem;

      div {
        font-size: 2rem;
      }
      p {
        text-align: center;
      }
    }

    hr {
      margin: 1rem 0;
    }

    .loginTooltip {
      a {
        text-decoration: underline;
        color: white;
      }
    }
  }

  // === SETTINGS MODAL ===
  .settingsModal {
    animation: fadeIn 0.5s;
    padding: 3rem 4rem;

    header {
      margin-bottom: 1rem;

      h3 {
        font-size: 1.7rem;
        font-family: poppins, sans-serif;
      }
      div {
        font-family: poppins, sans-serif;
      }
    }
  }
`;
