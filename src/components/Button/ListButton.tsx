import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

interface IProps {
  bgcolor: string;
  onClick(): void;
}

const useStyles = makeStyles({
  button: {
    cursor: 'pointer',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ListButton: React.FC<IProps> = ({ bgcolor, onClick, children }) => {
  const classes = useStyles();

  return (
    <Box onClick={onClick} className={classes.button} bgcolor={bgcolor}>
      {children}
    </Box>
  );
};
