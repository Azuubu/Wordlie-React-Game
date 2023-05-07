import React from 'react';
import { StyledHeader } from './styles/Header.styled';
import { HelpOutline, LeaderboardOutlined, Settings } from '@mui/icons-material';
import useWordlieLogic from '../hooks/useWordlieLogic';
import HeaderModal from './HeaderModal';

function Header({ isDevModeOn, toggleDevMode }) {
  const {
    isHelpOn,
    isLeaderboardOn,
    isSettingOn,
    openSettings,
    openLeaderboard,
    openHelp,
    setIsLeaderboardOn,
    setIsHelpOn,
    setIsSettingOn,
  } = useWordlieLogic();

  const openHelpIcon = isHelpOn ? 'headerCurrentlyOpen' : '';
  const openLeaderboardIcon = isLeaderboardOn ? 'headerCurrentlyOpen' : '';
  const openSettingsIcon = isSettingOn ? 'headerCurrentlyOpen' : '';

  return (
    <StyledHeader>
      <h1>Wordlie</h1>
      <div className="headerIconsGroup">
        <HelpOutline className={`headerIcon ${openHelpIcon}`} onClick={openHelp} />
        <LeaderboardOutlined
          className={`headerIcon ${openLeaderboardIcon}`}
          onClick={openLeaderboard}
        />
        <Settings className={`headerIcon ${openSettingsIcon}`} onClick={openSettings} />
      </div>
      {(isHelpOn || isLeaderboardOn || isSettingOn) && (
        <HeaderModal
          isHelpOn={isHelpOn}
          isLeaderboardOn={isLeaderboardOn}
          isSettingOn={isSettingOn}
          closeModal={() => {
            setIsLeaderboardOn(false);
            setIsHelpOn(false);
            setIsSettingOn(false);
          }}
          toggleDevMode={toggleDevMode}
          isDevModeOn={isDevModeOn}
        />
      )}
    </StyledHeader>
  );
}
export default Header;
