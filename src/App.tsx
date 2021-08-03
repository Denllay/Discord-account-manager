import React, { useEffect } from 'react';
import { useState } from 'react';
import { TAppPages } from './types/navigation';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserData } from './store/actions/getUserData';
import { getUserList } from './store/actions/getUserList';
import { useTypedSelector } from './hook/useTypedSelector';
import { darkTheme, lightTheme } from './theme';
import { getTheme } from './store/actions/getTheme';
import { Renderer } from './Renderer';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [page, setPage] = useState<TAppPages>('USER_INFO');
  const { isDarkMode } = useTypedSelector((state) => state.user);

  const activeTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    dispatch(getUserList());
    dispatch(getUserData());
    dispatch(getTheme());
  }, []);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />

      <Renderer page={page} setPage={setPage} />
    </ThemeProvider>
  );
};
