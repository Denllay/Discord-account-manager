import React, { useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { AlertPopup } from '@/components/UIkit/AlertPopup/AlertPopup';
import IconCopy from '@/assets/svg/iconCopy.svg';
import styles from './UserDataItem.module.scss';

interface IProps {
  data: string;
  title: string;
}

export const UserDataItem: React.FC<IProps> = ({ data, title }) => {
  const [copyAlertStatus, setCopyAlertStatus] = useState(false);
  const [errorAlertStatus, setErrorAlertStatus] = useState(false);

  const formatData = data.length >= 15 ? `${data.substr(0, 15)}...` : data;

  const closeCopyAlert = () => {
    setCopyAlertStatus(false);
  };

  const closeErrorAlert = () => {
    setErrorAlertStatus(false);
  };

  const onClickCopyData = () => {
    if (data !== '-') {
      navigator.clipboard.writeText(data);
      setCopyAlertStatus(true);
    } else {
      setErrorAlertStatus(true);
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="80%">
        <Box display="flex">
          <Box display="flex" mx={1.5}>
            <IconCopy style={{ cursor: 'pointer' }} onClick={onClickCopyData} />
          </Box>

          <Typography variant="h3">{title}</Typography>
        </Box>

        <Typography variant="subtitle1">{formatData}</Typography>
      </Box>

      <AlertPopup alertStatus={copyAlertStatus} severity="success" closeAlert={closeCopyAlert}>
        Sucsess copy!
      </AlertPopup>

      <AlertPopup alertStatus={errorAlertStatus} severity="error" closeAlert={closeErrorAlert}>
        This field is empty!
      </AlertPopup>
    </>
  );
};
