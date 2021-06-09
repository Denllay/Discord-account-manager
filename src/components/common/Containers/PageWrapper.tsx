import { useTypedSelector } from '@/hook/useTypedSelector';
import { Box, Paper, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

interface IProps {
  bgUrl?: string;
  flexStyle?: React.CSSProperties;
  bgStyle?: React.CSSProperties;
}

export const PageWrapper: React.FC<IProps> = ({ children, bgUrl = null, bgStyle = {}, flexStyle = {} }) => {
  const { isDarkMode } = useTypedSelector((state) => state.user);

  const classes = makeStyles(({ palette }: Theme) => {
    const bckgDefaultStyle = `url(${bgUrl}) no-repeat, ${palette.background.paper}`;
    const background = bgUrl ? bckgDefaultStyle : palette.background.paper;
    const backdropFilter = isDarkMode && bgUrl ? 'brightness(80%)' : 'none';

    return {
      wrapper: {
        background,
        ...bgStyle,
      },
      container: {
        padding: 15,
        minHeight: 500,
        minWidth: 500,
        position: 'relative',
        backdropFilter,
        ...flexStyle,
      },
    };
  })();

  return (
    <Paper className={classes.wrapper}>
      <Box className={classes.container}>{children}</Box>
    </Paper>
  );
};
