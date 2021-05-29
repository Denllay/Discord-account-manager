import React, { SetStateAction } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import IconBack from '@/assets/svg/iconArrowLeft.svg';
import { Dispatch } from 'react';
import { TFormStatus } from '@/types/addAccount';

interface IProps {
  setFormStatus: Dispatch<SetStateAction<TFormStatus>>;
}

export const AddAccount: React.FC<IProps> = ({ children, setFormStatus }) => {
  return (
    <div>
      <Box display="flex" justifyContent="space-between" width="68%" ml={1}>
        <Button startIcon={<IconBack />} onClick={() => setFormStatus('CHOICE')}>
          Back
        </Button>
        <Typography variant="h1">Add account</Typography>
      </Box>

      <Box>{children}</Box>
    </div>
  );
};
