import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { getUserData } from '@/store/actions/getUserData';
import { useGetCurrentTab } from '@/hook/useGetCurrentTab';
import styles from './Unaccounted.module.scss';

interface IProps {
  isDiscord: boolean;
}

export const Unaccounted: React.FC<IProps> = ({ isDiscord }) => {
  const dispatch = useTypedDispatch();

  const onClickReloadPage = async () => {
    const { id } = await useGetCurrentTab();
    chrome.tabs.reload(id!);
    dispatch(getUserData());
  };

  return (
    <div className={styles.wrapper}>
      <Typography className={styles.title} variant="h2">
        Go to your discord account, bitch
      </Typography>

      {isDiscord && (
        <Box>
          <Typography variant="subtitle1">Are you already in an account?</Typography>
          <Button variant="outlined" size="small" onClick={onClickReloadPage}>
            Reload
          </Button>
        </Box>
      )}
    </div>
  );
};
