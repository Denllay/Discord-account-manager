import React, { useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { CopyPopup } from '@/components/UIkit/CopyPopup/CopyPopup';
import IconCopy from '@/assets/svg/iconCopy.svg';

interface IProps {
  data: string;
  title: string;
}

export const InfoField: React.FC<IProps> = ({ data, title }) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const formatData = () => {
    if (title === 'password') {
      const formattedData = data.replace(/./g, '*').substr(0, 15);

      return data === '-' ? data : formattedData;
    }
    if (data.length >= 15) {
      return `${data.substr(0, 15)}...`;
    }
    return data;
  };

  const closeCopyAlert = () => {
    setCopyStatus(false);
  };

  const onClickCopyData = () => {
    setCopyStatus(true);
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

        <Typography variant="subtitle1">{formatData()}</Typography>
      </Box>

      <CopyPopup copyData={data} copyStatus={copyStatus} onClose={closeCopyAlert} />
    </>
  );
};
