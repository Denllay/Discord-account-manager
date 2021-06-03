import React from 'react';
import { IUserInfoList } from '@/types/userList';
import { Box } from '@material-ui/core';
import { DataButtonBlock } from './BlockButton';
import { InfoField } from './InfoField';
interface IProps {
  data: IUserInfoList;
}

export const UserInfoList: React.FC<IProps> = ({ data }) => {
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
    return <InfoField title={title} data={data} />;
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
