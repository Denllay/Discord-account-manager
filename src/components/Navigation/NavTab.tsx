import { IStyledTabProps, TMenuPages } from '@/types/navigation';
import { Box, createStyles, Theme, Typography, withStyles } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import React from 'react';

export const NavTab = withStyles((theme: Theme) =>
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
