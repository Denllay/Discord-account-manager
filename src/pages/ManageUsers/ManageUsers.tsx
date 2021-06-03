import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { ButtonAddUser } from './ModalAddUser/ButtonAddUser';
import { UserList } from './UserList/UserList';
import styles from './ManageUsers.module.scss';

export const ManageUsers = () => {
  return (
    <div className={styles.wrapper}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h1">Accounts list</Typography>
        <ButtonAddUser />
      </Box>

      <UserList />
    </div>
  );
};
