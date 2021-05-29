import React from 'react';
import { IUserMoreData } from '@/types/userList';
import { Box, Button, Typography } from '@material-ui/core';
import IconCopy from '@/assets/svg/iconCopy.svg';
import IconChange from '@/assets/svg/iconChange.svg';
import styles from './UserMoreData.module.scss';

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
  const renderListUserData = userDataConfig.map(({ title, data }) => {
    const formatData = data.length >= 15 ? `${data.substr(0, 15)}...` : data;

    return (
      <Box display="flex" alignItems="center" justifyContent="space-between" width="60%">
        <Box display="flex">
          <Box display="flex" mr={1.5}>
            <IconChange className={styles.icon} />

            <IconCopy className={styles.icon} />
          </Box>

          <Typography variant="h3">{title}</Typography>
        </Box>

        <Typography variant="subtitle1">{formatData}</Typography>
      </Box>
    );
  });

  return (
    <Box display="flex" flexDirection="column" bgcolor="rgba(255, 255, 255, 0.2)">
      <Box display="flex" flexDirection="column" position="relative">
        {renderListUserData}
      </Box>

      <Button color="secondary">Delete account</Button>
    </Box>
  );
};
