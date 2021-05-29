import React, { SetStateAction } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import IconBack from '@/assets/svg/iconArrowLeft.svg';
import { Dispatch } from 'react';
import { TFormStatus } from '@/types/addUser';

interface IProps {
  setFormStatus: Dispatch<SetStateAction<TFormStatus>>;
}

export const AddUser: React.FC<IProps> = ({ children, setFormStatus }) => {
  return (
    <div>
      <Box display="flex" justifyContent="space-between" width="68%" ml={1}>
        <Button startIcon={<IconBack />} size="small" onClick={() => setFormStatus('CHOICE')}>
          Back
        </Button>
        <Typography variant="h1">Add account</Typography>
      </Box>

      <Box mt={3}>{children}</Box>
    </div>
  );
};
