import { createStyles, Switch, SwitchClassKey, SwitchProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible: string;
}

interface IProps extends SwitchProps {
  classes: Styles;
}

export const SwitchTheme = withStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      width: 39,
      height: 21,
      padding: 0,
      margin: spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        '& + $track': {
          backgroundColor: palette.primary.main,
          opacity: 0.24,
          border: 'none',
        },
      },
    },
    thumb: {
      width: 18.5,
      height: 18.5,
      backgroundColor: palette.primary.main,
    },

    track: {
      borderRadius: 11,
      backgroundColor: palette.primary.main,
      opacity: 0.24,
      border: 'none',
    },
    checked: {},
    focusVisible: {},
  })
)(({ classes, ...props }: IProps) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root!,
        switchBase: classes.switchBase!,
        thumb: classes.thumb!,
        track: classes.track!,
        checked: classes.checked!,
      }}
      {...props}
    />
  );
});
