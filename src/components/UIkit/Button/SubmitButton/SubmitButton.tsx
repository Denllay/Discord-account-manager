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
  },
})(Button);

export const SubmitButton: React.FC = ({ children }) => {
  return <Submit type="submit">{children}</Submit>;
};
