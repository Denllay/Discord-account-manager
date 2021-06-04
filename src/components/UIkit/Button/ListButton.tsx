import { makeStyles } from '@material-ui/core';
import React from 'react';

interface IProps {
  onClick(): void;
  size?: ISize;
  bgcolor: string;
}

interface ISize {
  width: string;
  height: string;
}

const useStyles = makeStyles({
  button: {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ListButton: React.FC<IProps> = ({ onClick, size, bgcolor, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.button} onClick={onClick} style={{ ...size, background: bgcolor }}>
      {children}
    </div>
  );
};
