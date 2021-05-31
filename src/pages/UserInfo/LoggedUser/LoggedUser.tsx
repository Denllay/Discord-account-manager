import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { ButtonAddUser } from './ButtonAddUser';
import { CopyPopup } from '@/components/UIkit/CopyPopup/CopyPopup';
import IconCopy from '@/assets/svg/iconCopy.svg';
import styles from './LoggedUser.module.scss';

export const LoggedUser = () => {
  const [copyStatus, setCopyStatus] = useState(false);

  const { token } = useTypedSelector((state) => state.user);
  const formatToken = `${token!.substr(0, 20)}...`;

  const closePopup = () => {
    setCopyStatus(false);
  };

  const onCopy = () => {
    setCopyStatus(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Box pt={4.4} pl={2}>
          <Typography variant="h1">Account</Typography>
          <Box display="flex" alignItems="center" mt={2.5}>
            <IconCopy onClick={onCopy} style={{ cursor: 'pointer' }} />

            <Box ml={1}>
              <Typography variant="h3">Token:</Typography>
            </Box>

            <Box ml={1}>
              <Typography variant="subtitle1">{formatToken}</Typography>
            </Box>
          </Box>

          <ButtonAddUser token={token!} />
        </Box>
      </div>

      <CopyPopup copyStatus={copyStatus} copyData={token!} onClose={closePopup} />
    </>
  );
};
