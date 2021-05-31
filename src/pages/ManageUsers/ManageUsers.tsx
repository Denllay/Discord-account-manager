import React, { useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import { AddUser } from './AddUser/AddUser';
import { UsersList } from './UsersList/UsersList';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { getUserList } from '@/store/actions/getUserList';
import styles from './ManageUsers.module.scss';

export const ManageUsers = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div className={styles.wrapper}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h1">Accounts list</Typography>
        <AddUser />
      </Box>

      <UsersList />
    </div>
  );
};
