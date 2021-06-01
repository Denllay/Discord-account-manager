import { IStyledTabProps } from '@/types/navigation';
import { Box, createStyles, Theme, withStyles } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import React from 'react';

export const NavTab = withStyles(() =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#FFC700',
      fontWeight: 700,
      fontSize: '18px',
      padding: '0px 12px',
    },
  })
)((props: IStyledTabProps) => <Tab disableRipple {...props} />);
