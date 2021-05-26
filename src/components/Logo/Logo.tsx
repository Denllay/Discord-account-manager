import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <Typography className={styles.logo} variant="h1">
        Discord ama ama boss
      </Typography>
    </div>
  );
};
