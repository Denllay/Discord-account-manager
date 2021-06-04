import React from 'react';
import { IUserInfoList } from '@/types/userList';
import { Box } from '@material-ui/core';
import { BlockButton } from './BlockButton';
import { InfoField } from './InfoField';
interface IProps {
  data: IUserInfoList;
}

export const UserInfoList: React.FC<IProps> = ({ data }) => {
  const { token, email } = data;

  const userInfoConfig = [
    {
      title: 'token',
      data: token,
    },
    {
      title: 'email',
      data: email,
    },
  ];

  const userInfoNodeList = userInfoConfig.map(({ title, data }) => {
    return <InfoField title={title} data={data} />;
  });

  return (
    <Box bgcolor="rgba(255, 255, 255, 0.5)">
      <Box display="flex" flexDirection="column" position="relative" mb={2}>
        {userInfoNodeList}
      </Box>

      <BlockButton data={data} />
    </Box>
  );
};
