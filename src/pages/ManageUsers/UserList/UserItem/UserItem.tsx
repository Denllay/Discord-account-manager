import React, { useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { ListButton } from '@/components/UIkit/Button/ListButton';
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
  avatar: {
    borderRadius: '2px',
    height: '22px',
  },
});

export const UserItem: React.FC<IProps> = ({ data }) => {
  const classes = useStyles();

  const [statusMoreInfo, setStatusMoreInfo] = useState(false);
  const { token } = useTypedSelector((state) => state.user);
  const { name, avatar } = data;

  const classToUse = data.token === token ? 'active_wrapper' : 'default_wrapper';
  const formattedName = name.length >= 15 ? `${name.substr(0, 15)}...` : name;

  const onMoreInfo = () => {
    setStatusMoreInfo((prev) => !prev);
  };

  return (
    <Box mt={1.5}>
      <Box className={classes[classToUse]} display="flex" alignItems="center" justifyContent="space-between">
        <Box ml={2} display="flex">
          <Box mr={2} display="flex" alignItems="center">
            <img className={classes.avatar} src={avatar} />
          </Box>

          <Typography variant="body1">{formattedName}</Typography>
        </Box>

        <ListButton onClick={onMoreInfo} bgcolor="rgba(255, 199, 0, 0.5)">
          <IconMore />
        </ListButton>
      </Box>

      {statusMoreInfo && <UserInfoList data={data} />}
    </Box>
  );
};
