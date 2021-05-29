import React from 'react';
import { UserItem } from './UserItem/UserItem';
import { Box } from '@material-ui/core';
import { useTypedSelector } from '@/hook/useTypedSelector';

export const UsersList = () => {
  const { list } = useTypedSelector((state) => state.userList);

  const userRenderList = list.map(({ name, ...userData }) => {
    return <UserItem key={userData.token} name={name} userData={userData} />;
  });

  return (
    <Box display="flex" flexDirection="column">
      {userRenderList}
    </Box>
  );
};
