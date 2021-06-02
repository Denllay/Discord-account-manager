import React from 'react';
import { Typography, Box } from '@material-ui/core';
import styles from './PreLoader.module.scss';

export const PreLoader = () => {
  return (
    <div className={styles.wrapper}>
      <Box mt={7}>
        <Typography variant="h1">Please wait loading...</Typography>
      </Box>
    </div>
  );
};
