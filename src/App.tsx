import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TAppPages } from './types/navigation';
import { UserInfo } from './pages/UserInfo/UserInfo';
import { ManageUsers } from './pages/ManageUsers/ManageUsers';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserData } from './store/actions/getUserData';
import { getUserList } from './store/actions/getUserList';
import { useTypedSelector } from './hook/useTypedSelector';
import { PreLoader } from './components/PreLoader/PreLoader';
import { AboutInfo } from './pages/AboutInfo/AboutInfo';
import styles from './App.module.scss';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [page, setPage] = useState<TAppPages>('USER_INFO');
  const { appLoadedStatus } = useTypedSelector((state) => state.user);

  const renderPage = () => {
    if (page === 'MANAGMENT_USERS') {
      return <ManageUsers />;
    }

    if (page === 'USER_INFO') {
      return <UserInfo />;
    }

    if (page === 'ABOUT_INFO') {
      return <AboutInfo />;
    }

    return null;
  };

  useEffect(() => {
    dispatch(getUserList());
    dispatch(getUserData());
  }, []);

  return (
    <div className={styles.App}>
      <Navigation page={page} setPage={setPage} />

      {appLoadedStatus ? renderPage() : <PreLoader />}
    </div>
  );
};
