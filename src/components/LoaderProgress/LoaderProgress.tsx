import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';

interface IProps {
  isLoading: boolean;
  errorStatus: boolean;
}

export const LoaderProgress: React.FC<IProps> = ({ isLoading, errorStatus, children }) => {
  const renderErrorMessage = () => {
    if (errorStatus && !isLoading) {
      return (
        <Typography variant="subtitle1" color="error">
          {children}
        </Typography>
      );
    }

    return null;
  };
  return (
    <Box display="flex" justifyContent="center">
      {renderErrorMessage()}

      {isLoading && <CircularProgress />}
    </Box>
  );
};
