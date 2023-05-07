import React from 'react';
import { StyledHeaderModal } from './styles/HeaderModal.styled';
import CloseIcon from '@mui/icons-material/Close';

function HeaderModal({
  isSettingOn,
  isHelpOn,
  isLeaderboardOn,
  closeModal,
  toggleDevMode,
  isDevModeOn,
}) {
  return (
    <StyledHeaderModal onClick={closeModal}>
      <div
        className="headerModal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseIcon className="headerModalCloseIcon" onClick={closeModal} />

        {isHelpOn && (
          <div className="helpModal">
            <header>
              <h3>How To Play</h3>
              <div>Guess the correct word in 6 tries.</div>
            </header>

            <ul>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>The color of the tiles will change according to your guesses.</li>
            </ul>

            <div className="showcaseSection">
              <p className="examplesHeader">
                <b>Examples</b>
              </p>

              <div className="singleSegment">
                <div className="singleRow">
                  <div className="singleLetterCell noMarginLeft">
                    <p className="first">F</p>
                  </div>
                  <div className="singleLetterCell greenCell">
                    <p className="second">L</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="third">U</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="fourth">T</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="fifth">E</p>
                  </div>
                </div>
                <p>L is in the word and the correct spot.</p>
              </div>

              <div className="singleSegment">
                <div className="singleRow">
                  <div className="singleLetterCell noMarginLeft yellowCell">
                    <p className="first">W</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="second">R</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="third">O</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="fourth">N</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="fifth">G</p>
                  </div>
                </div>
                <p>W is in the word but the wrong spot.</p>
              </div>

              <div className="singleSegment">
                <div className="singleRow">
                  <div className="singleLetterCell noMarginLeft">
                    <p className="first">A</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="second">P</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="third">P</p>
                  </div>
                  <div className="singleLetterCell">
                    <p className="fourth">L</p>
                  </div>
                  <div className="singleLetterCell greyCell">
                    <p className="fifth">E</p>
                  </div>
                </div>
                <p>E is not in the word.</p>
              </div>
            </div>

            <hr />

            <footer>
              <p>In this version of the game, You can play as much as You want.</p>
              <p>
                Check settings for the <i>Developer Mode!</i>
              </p>
              <p className="goodLuck">Good Luck!</p>
            </footer>
          </div>
        )}

        {isLeaderboardOn && (
          <div className="leaderboardModal">
            <header>
              <h3>Leaderboard</h3>
              <div>Check your stats and playtime.</div>
            </header>

            <div>
              <p className="marginBottom">
                <b>Stats:</b>
              </p>
              <div className="stats">
                <div className="statGroup">
                  <div>0</div>
                  <p>Played Games</p>
                </div>
                <div className="statGroup">
                  <div>0</div>
                  <p>Won Games</p>
                </div>
                <div className="statGroup">
                  <div>0</div>
                  <p>Current Streak</p>
                </div>
                <div className="statGroup">
                  <div>0</div>
                  <p>Highest Streak</p>
                </div>
              </div>

              <div className="totalPlaytime">
                <p>Total Playtime: 0 hrs</p>
              </div>
            </div>

            <hr />

            <div className="loginTooltip">
              <p>You need to be logged in to see your stats.</p>
              <p>
                Log in or create your account <a href="/">here</a>.
              </p>
            </div>
          </div>
        )}
        {isSettingOn && (
          <div className="settingsModal">
            <header>
              <h3>Settings</h3>
              <div>Adjust your account here.</div>
            </header>

            <div className="developerModeToggle">
              <p>
                <b>Developer Mode</b>
              </p>
              <input
                type="checkbox"
                id="switch"
                onChange={toggleDevMode}
                checked={isDevModeOn}
              />
              <label htmlFor="switch"></label>
            </div>
          </div>
        )}
      </div>
    </StyledHeaderModal>
  );
}

export default HeaderModal;
