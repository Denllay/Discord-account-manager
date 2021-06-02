import React from 'react';
import { IUserMoreData } from '@/types/userList';
import { Box } from '@material-ui/core';
import { DataButtonBlock } from './DataButtonBlock';
import { DataItem } from './DataItem';
interface IProps {
  data: IUserMoreData;
}

export const UserMoreData: React.FC<IProps> = ({ data }) => {
  const { token, email, password } = data;

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

  const listUserData = userDataConfig.map(({ title, data }) => {
    return <DataItem title={title} data={data} />;
  });

  return (
    <Box bgcolor="rgba(255, 255, 255, 0.2)">
      <Box display="flex" flexDirection="column" position="relative" mb={2}>
        {listUserData}
      </Box>

      <DataButtonBlock data={data} />
    </Box>
  );
};
