import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';

interface IProps {
  isLoading: boolean;
  errorStatus: boolean;
}

export const LoaderProgress: React.FC<IProps> = ({ isLoading, errorStatus, children }) => {
  return (
    <Box display="flex" justifyContent="center">
      {errorStatus && !isLoading ? (
        <Typography variant="subtitle1" color="error">
          {children}
        </Typography>
      ) : null}

      {isLoading && <CircularProgress />}
    </Box>
  );
};
