import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import IconGitHub from '@/assets/svg/iconGitHub.svg';
import background from '@/assets/img/background_about_info.png';

const gitHubUrl = 'https://github.com/Denllay/Discord-account-manager';

const onClickLink = () => {
  chrome.tabs.create({ url: gitHubUrl });
};

const flexWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const bgWrapperStyle = {
  backgroundSize: '60%',
  backgroundPosition: 'bottom right',
};

export const AboutInfo = () => {
  return (
    <PageWrapper bgUrl={background} bgStyle={bgWrapperStyle} flexStyle={flexWrapperStyle}>
      <Box mt={1}>
        <Typography variant="h2">Google chrome extension for managment Discord accounts</Typography>
      </Box>

      <Box display="flex" flexDirection="column" mb={2}>
        <Box display="flex">
          <Typography variant="body1">Developers:</Typography>
          <Typography variant="body2">Denllay, Dizel</Typography>
        </Box>

        <Box display="flex">
          <Box mr={2} onClick={onClickLink}>
            <IconGitHub style={{ cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};
