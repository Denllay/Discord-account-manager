import React from 'react';
import { PageWrapper } from '@/components/common/Containers/PageWrapper';
import { Typography } from '@material-ui/core';

const flexWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Unaccounted = () => {
  return (
    <PageWrapper flexStyle={flexWrapperStyle}>
      <Typography variant="h1">Discord is not available</Typography>
    </PageWrapper>
  );
};
