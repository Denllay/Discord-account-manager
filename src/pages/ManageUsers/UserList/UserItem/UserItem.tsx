import React, { useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { ListButton } from '@/components/UIkit/Button/ListButton/ListButton';
import { IUserInfoList } from '@/types/userList';
import { UserInfoList } from './UserInfoList/UserInfoList';
import IconMore from '@/assets/svg/iconMore.svg';
import { useTypedSelector } from '@/hook/useTypedSelector';

interface IProps {
  data: IUserInfoList;
}

const useStyles = makeStyles({
  default_wrapper: {
    background: 'rgba(255, 255, 255, 0.5)',
  },
  active_wrapper: {
    background: 'rgba(255, 199, 0, 0.5)',
  },
});

export const UserItem: React.FC<IProps> = ({ data }) => {
  const classes = useStyles();
  const [moreInfoStatus, setMoreInfoStatus] = useState(false);
  const { token } = useTypedSelector((state) => state.user);

  const classToUse = data.token === token ? 'active_wrapper' : 'default_wrapper';

  const onClickMoreInfo = () => {
    setMoreInfoStatus((prev) => !prev);
  };

  return (
    <Box mt={1.5}>
      <Box className={classes[classToUse]} display="flex" alignItems="center" justifyContent="space-between">
        <Box ml={2}>
          <Typography variant="h3">{data.name}</Typography>
        </Box>

        <ListButton onClick={onClickMoreInfo} bgcolor="rgba(255, 199, 0, 0.5)">
          <IconMore />
        </ListButton>
      </Box>

      {moreInfoStatus && <UserInfoList data={data} />}
    </Box>
  );
};
