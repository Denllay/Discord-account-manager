import React from 'react';
import { List, Typography, Box } from '@material-ui/core';
import IconCopy from '@/assets/svg/iconCopy.svg';
import { useTypedSelector } from '@/hook/useTypedSelector';
import styles from './LoggedUser.module.scss';

export const LoggedUser = () => {
  const { token } = useTypedSelector((state) => state.user);
  const formatToken = `${token!.substr(0, 20)}...`;

  return (
    <div className={styles.wrapper}>
      <Box pt={4.4} pl={2}>
        <Typography variant="h1">Account</Typography>
        <Box display="flex" alignItems="center" mt={2.5}>
          <IconCopy style={{ cursor: 'pointer' }} />

          <Typography variant="h2">Token:</Typography>

          <Box ml={1}>
            <Typography variant="subtitle1">{formatToken}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
