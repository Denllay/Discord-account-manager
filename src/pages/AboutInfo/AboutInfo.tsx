import React from 'react';
import { Box, Typography } from '@material-ui/core';
import IconDiscord from '@/assets/svg/iconDiscord.svg';
import IconGitHub from '@/assets/svg/iconGitHub.svg';
import styles from './AboutInfo.module.scss';

export const AboutInfo = () => {
  const onClickLink = (url: string) => {
    if (url === 'MEME') {
      chrome.tabs.create({ url: getRandomMem() });
    } else {
      chrome.tabs.create({ url });
    }
  };

  const getRandomMem = () => {
    const rickRoll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const babyShark = 'https://www.youtube.com/watch?v=XqZsoesa55w';

    return Math.random() > 0.5 ? babyShark : rickRoll;
  };

  return (
    <div className={styles.wrapper}>
      <Box mt={1}>
        <Typography variant="h2">Google chrome extension for managment Discord accounts</Typography>
      </Box>

      <Box display="flex" flexDirection="column" mb={2}>
        <Box display="flex">
          <Typography variant="body1">Developers:</Typography>
          <Typography variant="body2">Denllay, Dizel</Typography>
        </Box>

        <Box display="flex">
          <Box mr={2} onClick={() => onClickLink('https://github.com/Denllay/Discord-account-manager')}>
            <IconGitHub style={{ cursor: 'pointer' }} />
          </Box>

          <Box onClick={() => onClickLink('MEME')}>
            <IconDiscord style={{ cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};