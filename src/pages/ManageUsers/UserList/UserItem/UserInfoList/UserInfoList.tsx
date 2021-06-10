import React from 'react';
import { IUserInfoList } from '@/types/userList';
import { Box, Theme } from '@material-ui/core';
import { BlockButton } from './BlockButton';
import { InfoField } from './InfoField';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { useGetDataByToken } from '@/hook/useGetDataByToken';
import { changeUserData } from '@/store/actions/changeUserData';
import { makeStyles } from '@material-ui/core';
import IconRefresh from '@/assets/svg/iconRefresh.svg';
interface IProps {
  data: IUserInfoList;
}

const useStyles = makeStyles(({ palette }: Theme) => ({
  wrapper: {
    background: `${palette.background.default}7F`,
    position: 'relative',
  },
  default_refresh: {
    cursor: 'pointer',
  },
  active_refresh: {
    animation: '$rotate_animation 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
  },

  '@keyframes rotate_animation': {
    '0%': {
      transform: 'rotate(360deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
}));

export const UserInfoList: React.FC<IProps> = ({ data }) => {
  const dispatch = useTypedDispatch();
  const { isLoading, getDataByToken } = useGetDataByToken();
  const { token, email, id, name, username } = data;
  const classes = useStyles();

  const classToUseRefresh = isLoading ? 'active_refresh' : 'default_refresh';

  const userInfoConfig = [
    {
      title: 'token',
      data: token,
    },
    {
      title: 'email',
      data: email,
    },
    {
      title: 'user name',
      data: username,
    },
  ];

  const refreshData = async () => {
    if (!isLoading) {
      const userData = await getDataByToken(token);
      const { avatar, email, username } = userData!;

      dispatch(changeUserData({ avatar, email, token, id, name, username }));
    }
  };

  const userInfoNodeList = userInfoConfig.map(({ title, data }) => {
    return <InfoField title={title} data={data} />;
  });

  return (
    <Box className={classes.wrapper}>
      <Box display="flex" flexDirection="column" position="relative" mb={2}>
        {userInfoNodeList}
      </Box>

      <Box position="absolute" top="10px" right="5px">
        <IconRefresh onClick={refreshData} className={classes[classToUseRefresh]} />
      </Box>

      <BlockButton data={data} />
    </Box>
  );
};
