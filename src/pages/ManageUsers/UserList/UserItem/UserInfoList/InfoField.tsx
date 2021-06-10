import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { CopyPopup } from '@/components/common/CopyPopup';
import { Icon } from '@/components/common/Icon';
import IconCopy from '@/assets/svg/iconCopy.svg';

interface IProps {
  data: string;
  title: string;
}

export const InfoField: React.FC<IProps> = ({ data, title }) => {
  const [copyStatus, setCopyStatus] = useState(false);
  const formattedData = data.length >= 15 ? `${data.substr(0, 15)}...` : data;

  const closeCopyAlert = () => {
    setCopyStatus(false);
  };

  const onClickCopy = () => {
    setCopyStatus(true);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" pt={2} width="80%">
        <Box display="flex" alignItems="center">
          <Box mx={1.5}>
            <Icon>
              <IconCopy onClick={onClickCopy} />
            </Icon>
          </Box>

          <Typography variant="body2">{title}</Typography>
        </Box>

        <Typography variant="subtitle1">{formattedData}</Typography>
      </Box>

      <CopyPopup copyData={data} copyStatus={copyStatus} onClose={closeCopyAlert} />
    </>
  );
};
