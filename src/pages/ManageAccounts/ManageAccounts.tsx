import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { AddUser } from './AddUser/AddUser';
import styles from './ManageAccounts.module.scss';

export const ManageAccounts = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h1">Accounts list</Typography>
          <AddUser />
        </Box>
      </div>
    </>
  );
};
