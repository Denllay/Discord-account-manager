import React from 'react';
import { TopBlock } from './TopBlock';
import { UserList } from './UserList/UserList';
import styles from './ManageUsers.module.scss';

export const ManageUsers = () => {
  return (
    <div className={styles.wrapper}>
      <TopBlock />

      <UserList />
    </div>
  );
};
