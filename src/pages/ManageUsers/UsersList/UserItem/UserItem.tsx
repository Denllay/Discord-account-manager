import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { ListButton } from '@/components/UIkit/Button/ListButton/ListButton';
import { IUserMoreData } from '@/types/userList';
import { UserMoreData } from './UserMoreData/UserMoreData';
import IconMore from '@/assets/svg/iconMore.svg';

interface IProps {
  name: string;
  userData: IUserMoreData;
}

export const UserItem: React.FC<IProps> = ({ name, userData }) => {
  const [moreDataStatus, setMoreDataStatus] = useState(false);

  const onClickMoreData = () => {
    setMoreDataStatus((prev) => !prev);
  };

  return (
    <Box bgcolor="rgba(255, 255, 255, 0.5)" mt={1.5}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box ml={2}>
          <Typography variant="h3">{name}</Typography>
        </Box>

        <ListButton onClick={onClickMoreData} bgcolor="rgba(255, 199, 0, 0.5)">
          <IconMore />
        </ListButton>
      </Box>

      {moreDataStatus && <UserMoreData data={userData} />}
    </Box>
  );
};
