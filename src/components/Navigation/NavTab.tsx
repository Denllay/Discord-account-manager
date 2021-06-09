import { IStyledTabProps } from '@/types/app';
import { createStyles, withStyles } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import React from 'react';

export const NavTab = withStyles(() =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#FFC700',
      fontWeight: 700,
      fontSize: '17px',
      padding: '0px 8px',
    },
  })
)((props: IStyledTabProps) => <Tab disableRipple {...props} />);
