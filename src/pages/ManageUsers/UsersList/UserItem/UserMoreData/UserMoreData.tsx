import React from 'react';
import { IUserMoreData } from '@/types/userList';
import { Box, Button, Typography } from '@material-ui/core';
import { UserDataItem } from './UserDataItem';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { deleteUser } from '@/store/actions/deleteUser';

interface IProps {
  data: IUserMoreData;
}

export const UserMoreData: React.FC<IProps> = ({ data }) => {
  const dispatch = useTypedDispatch();

  const { token, email, password, id } = data;

  const onDeleteUser = () => {
    dispatch(deleteUser(id));
  };

  const userDataConfig = [
    {
      title: 'token',
      data: token,
    },
    {
      title: 'password',
      data: password,
    },
    {
      title: 'email',
      data: email,
    },
  ];

  const renderListUserData = userDataConfig.map(({ title, data }) => {
    return <UserDataItem title={title} data={data} />;
  });

  return (
    <>
      <Box bgcolor="rgba(255, 255, 255, 0.2)">
        <Box display="flex" flexDirection="column" position="relative" mb={2}>
          {renderListUserData}
        </Box>
        <Box>
          <Button color="secondary" onClick={onDeleteUser}>
            <Typography variant="h2">DELETE ACCOUNT</Typography>
          </Button>

          <Button>
            <Typography variant="h2">CHANGE DATA</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
