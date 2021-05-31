import React, { useEffect } from 'react';
import { ListItemIcon } from '@material-ui/core';
import { useState } from 'react';
import { AlertPopup } from '@/components/UIkit/AlertPopup/AlertPopup';
import IconCopy from '@/assets/svg/iconCopy.svg';

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
        <IconCopy style={{ cursor: 'pointer' }} onClick={onClickCopyToken} />
      </ListItemIcon>

      <AlertPopup alertStatus={copyAlertStatus} severity="success" onClose={closeAlert}>
        Sucsess copy!
      </AlertPopup>
    </>
  );
};
