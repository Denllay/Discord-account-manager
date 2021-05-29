import React from 'react';
import { ListItemIcon } from '@material-ui/core';
import { useState } from 'react';
import { AlertPopup } from '@/components/UIkit/AlertPopup/AlertPopup';
import IconCopy from '@/assets/svg/iconCopy.svg';
import styles from './UserConfigItem.module.scss';

interface IProps {
  data: string;
}

export const UserConfigCopy: React.FC<IProps> = ({ data }) => {
  const [copyAlertStatus, setCopyAlertStatus] = useState(false);

  const closeAlert = () => {
    setCopyAlertStatus(false);
  };
  const onClickCopyToken = () => {
    navigator.clipboard.writeText(data);
    setCopyAlertStatus(true);
  };

  return (
    <>
      <ListItemIcon>
        <IconCopy className={styles.icon_copy} onClick={onClickCopyToken} />
      </ListItemIcon>

      <AlertPopup alertStatus={copyAlertStatus} severity="success" closeAlert={closeAlert}>
        Sucsess copy!
      </AlertPopup>
    </>
  );
};