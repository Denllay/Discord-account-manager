import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './Unaccounted.module.scss';

export const Unaccounted = () => {
  return (
    <div className={styles.wrapper}>
      <Typography className={styles.title} variant="h2">
        Go to your account, bitch
      </Typography>
    </div>
  );
};
