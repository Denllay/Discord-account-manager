import React, { SetStateAction } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import IconBack from '@/assets/svg/iconArrowLeft.svg';
import { Dispatch } from 'react';
import { TFormStatus } from '@/types/addUser';

interface IProps {
  setFormStatus: Dispatch<SetStateAction<TFormStatus>>;
}

export const BoxAddUser: React.FC<IProps> = ({ children, setFormStatus }) => {
  const onBackForm = () => {
    setFormStatus('CHOICE');
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" width="68%" ml={1}>
        <Button startIcon={<IconBack />} size="small" onClick={onBackForm}>
          Back
        </Button>

        <Typography variant="h1">Add account</Typography>
      </Box>

      <Box height="99%" display="flex" justifyContent="space-around" flexDirection="column">
        {children}
      </Box>
    </>
  );
};
