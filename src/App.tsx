import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TAppPages } from './types/navigation';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { UserInfo } from './pages/UserInfo/UserInfo';
import { ManageUsers } from './pages/ManageUsers/ManageUsers';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserData } from './store/actions/getUserData';
import { getUserList } from './store/actions/getUserList';
import { useTypedSelector } from './hook/useTypedSelector';
import { PreLoader } from './components/PreLoader/PreLoader';
import { AboutInfo } from './pages/AboutInfo/AboutInfo';
import { darkTheme, lightTheme } from './theme';
import { getTheme } from './store/actions/getTheme';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [page, setPage] = useState<TAppPages>('USER_INFO');
  const { appLoadedStatus, isDarkMode } = useTypedSelector((state) => state.user);
  const activeTheme = isDarkMode ? darkTheme : lightTheme;

  const renderPage = () => {
    switch (page) {
      case 'ABOUT_INFO':
        return <AboutInfo />;

      case 'MANAGMENT_USERS':
        return <ManageUsers />;

      case 'USER_INFO':
        return <UserInfo />;

      default:
        return null;
    }
  };

  const renderApp = () => {
    if (appLoadedStatus) {
      return (
        <>
          <Navigation page={page} setPage={setPage} />
          {renderPage()}
        </>
      );
    }
    return <PreLoader />;
  };

  useEffect(() => {
    dispatch(getUserList());
    dispatch(getUserData());
    dispatch(getTheme());
  }, []);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />

      {renderApp()}
    </ThemeProvider>
  );
};
