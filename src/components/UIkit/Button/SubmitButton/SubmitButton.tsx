import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const Submit = withStyles({
  root: {
    borderRadius: '5px',
    boxShadow: 'none',
    padding: '5px 25px',
    backgroundColor: '#A0FE67',
    fontSize: 14,
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 400,
    color: '#545454',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: '#B1FF82',
    },
    '&:active': {
      backgroundColor: '#B1FF82',
    },

    '&.Mui-disabled': {
      pointerEvents: 'auto',
      cursor: 'not-allowed',
    },
  },
})(Button);

interface IProps {
  disabled?: boolean;
}

export const SubmitButton: React.FC<IProps> = ({ children, disabled = false }) => {
  return (
    <Submit disabled={disabled} type="submit">
      {children}
    </Submit>
  );
};
