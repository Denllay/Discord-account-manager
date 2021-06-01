import React from 'react';
import { UserItem } from './UserItem/UserItem';
import { Box } from '@material-ui/core';
import { useTypedSelector } from '@/hook/useTypedSelector';

export const UsersList = () => {
  const { list } = useTypedSelector((state) => state.userList);

  const userRenderList = list.map((data) => {
    return <UserItem key={data.token} data={data} />;
  });

  return (
    <Box display="flex" flexDirection="column">
      {userRenderList}
    </Box>
  );
};
