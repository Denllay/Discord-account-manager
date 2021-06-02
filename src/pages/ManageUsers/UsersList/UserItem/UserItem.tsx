import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { ListButton } from '@/components/UIkit/Button/ListButton/ListButton';
import { IUserMoreInfo } from '@/types/userList';
import { UserMoreInfo } from './UserMoreInfo/UserMoreInfo';
import IconMore from '@/assets/svg/iconMore.svg';

interface IProps {
  data: IUserMoreInfo;
}

export const UserItem: React.FC<IProps> = ({ data }) => {
  const [moreDataStatus, setMoreDataStatus] = useState(false);

  const onClickMoreData = () => {
    setMoreDataStatus((prev) => !prev);
  };

  return (
    <Box bgcolor="rgba(255, 255, 255, 0.5)" mt={1.5}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box ml={2}>
          <Typography variant="h3">{data.name}</Typography>
        </Box>

        <ListButton onClick={onClickMoreData} bgcolor="rgba(255, 199, 0, 0.5)">
          <IconMore />
        </ListButton>
      </Box>

      {moreDataStatus && <UserMoreInfo data={data} />}
    </Box>
  );
};
