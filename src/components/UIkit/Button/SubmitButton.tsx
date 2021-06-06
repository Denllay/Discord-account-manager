import React from 'react';
import { withStyles, Button, Theme } from '@material-ui/core';

const Submit = withStyles(({ palette }: Theme) => ({
  root: {
    borderRadius: 5,
    boxShadow: 'none',
    padding: '5px 25px',
    backgroundColor: palette.secondary.main,
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
}))(Button);

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
