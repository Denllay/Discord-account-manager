import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { PageWrapper } from '../Containers/PageWrapper';
import background from '@/assets/img/background_preloader.png';

const flexWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const bgWrapperStyle = {
  backgroundSize: '300px',
  backgroundPosition: 'bottom right',
};

export const PreLoader = () => {
  return (
    <PageWrapper bgUrl={background} bgStyle={bgWrapperStyle} flexStyle={flexWrapperStyle}>
      <Box pt={7} height="548px">
        <Typography variant="h1">Please wait loading...</Typography>
      </Box>
    </PageWrapper>
  );
};
