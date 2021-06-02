import React from 'react';
import { IUserMoreInfo } from '@/types/userList';
import { Box } from '@material-ui/core';
import { DataButtonBlock } from './BlockButton';
import { InfoItem } from './InfoItem';
interface IProps {
  data: IUserMoreInfo;
}

export const UserMoreInfo: React.FC<IProps> = ({ data }) => {
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
    return <InfoItem title={title} data={data} />;
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
