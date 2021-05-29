import React, { SetStateAction } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { TFormStatus } from '@/types/addAccount';
import { Dispatch } from 'react';

interface IProps {
  setFormStatus: Dispatch<SetStateAction<TFormStatus>>;
}

export const ChoiceForm: React.FC<IProps> = ({ setFormStatus }) => {
  return (
    <>
      <Typography variant="h1">Add account</Typography>

      <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
        <Typography variant="subtitle1">Select option to authorization</Typography>

        <Box display="flex" mt={2}>
          <Button variant="outlined" onClick={() => setFormStatus('TOKEN')}>
            <Typography variant="h2">Token</Typography>
          </Button>

          <Box mx={2}>
            <Typography variant="subtitle1">or</Typography>
          </Box>

          <Button variant="outlined" onClick={() => setFormStatus('BASIC')}>
            <Typography variant="h2">Basic</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
