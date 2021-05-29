import React, { useState } from 'react';
import { IUserMoreData } from '@/types/userList';
import { AlertPopup } from '@/components/UIkit/AlertPopup/AlertPopup';
import { Box, Button, Typography } from '@material-ui/core';
import IconCopy from '@/assets/svg/iconCopy.svg';
import IconChange from '@/assets/svg/iconChange.svg';
import styles from './UserMoreData.module.scss';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { deleteUser } from '@/store/actions/deleteUser';

interface IProps {
  data: IUserMoreData;
}

export const UserMoreData: React.FC<IProps> = ({ data }) => {
  const [copyAlertStatus, setCopyAlertStatus] = useState(false);
  const [errorAlertStatus, setErrorAlertStatus] = useState(false);
  const dispatch = useTypedDispatch();

  const { token, email, password, id } = data;

  const closeCopyAlert = () => {
    setCopyAlertStatus(false);
  };

  const closeErrorAlert = () => {
    setErrorAlertStatus(false);
  };

  const onCopyData = (data: string) => {
    if (data !== '-') {
      navigator.clipboard.writeText(data);
      setCopyAlertStatus(true);
    } else {
      setErrorAlertStatus(true);
    }
  };

  const onDeleteUser = () => {
    dispatch(deleteUser(id));
  };

  const userDataConfig = [
    {
      title: 'token',
      data: token,
    },
    {
      title: 'password',
      data: password,
    },
    {
      title: 'email',
      data: email,
    },
  ];

  const renderListUserData = userDataConfig.map(({ title, data }) => {
    const formatData = data.length >= 15 ? `${data.substr(0, 15)}...` : data;

    return (
      <Box display="flex" alignItems="center" justifyContent="space-between" width="60%">
        <Box display="flex">
          <Box display="flex" mr={1.5}>
            <IconChange className={styles.icon} />

            <IconCopy className={styles.icon} onClick={() => onCopyData(data)} />
          </Box>

          <Typography variant="h3">{title}</Typography>
        </Box>

        <Typography variant="subtitle1">{formatData}</Typography>
      </Box>
    );
  });

  return (
    <>
      <Box bgcolor="rgba(255, 255, 255, 0.2)">
        <Box display="flex" flexDirection="column" position="relative">
          {renderListUserData}
        </Box>

        <Button color="secondary" onClick={onDeleteUser}>
          Delete account
        </Button>
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
