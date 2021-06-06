import React, { useState } from 'react';
import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import { ButtonInfoMore } from '@/components/UIkit/Button/ButtonInfoMore';
import { IUserInfoList } from '@/types/userList';
import { UserInfoList } from './UserInfoList/UserInfoList';
import { useTypedSelector } from '@/hook/useTypedSelector';
import IconMore from '@/assets/svg/iconMore.svg';
import defaultAvatar from '@/assets/img/default_avatar.jpg';

interface IProps {
  data: IUserInfoList;
}

const useStyles = makeStyles(({ palette }: Theme) => ({
  default_wrapper: {
    background: `${palette.background.default}7F`,
  },
  active_wrapper: {
    background: `${palette.primary.main}7F`,
  },
  avatar: {
    borderRadius: '2px',
    height: '22px',
    background: '#c4c4c4',
  },
}));

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

  const onErrorImg = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.target.onerror = null;
    e.target.src = defaultAvatar;
  };

  return (
    <Box mt={1.5}>
      <Box className={classes[classToUse]} display="flex" alignItems="center" justifyContent="space-between">
        <Box ml={2} display="flex">
          <Box mr={2} display="flex" alignItems="center">
            <img className={classes.avatar} src={avatar} onError={onErrorImg} />
          </Box>

          <Typography variant="body1">{formattedName}</Typography>
        </Box>

        <ButtonInfoMore onClick={onMoreInfo}>
          <IconMore />
        </ButtonInfoMore>
      </Box>

      {statusMoreInfo && <UserInfoList data={data} />}
    </Box>
  );
};
