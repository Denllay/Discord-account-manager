import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TAppPages } from './types/navigation';
import { UserInfo } from './pages/UserInfo/UserInfo';
import { ManageUsers } from './pages/ManageUsers/ManageUsers';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserData } from './store/actions/getUserData';
import { getUserList } from './store/actions/getUserList';
import { onMessageChromeEvent } from './store/actions/onMessageChromeEvent';
import styles from './App.module.scss';
import { useTypedSelector } from './hook/useTypedSelector';
import { PreLoader } from './components/PreLoader/PreLoader';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [page, setPage] = useState<TAppPages>('MANAGMENT_USERS');
  const { appLoadedStatus } = useTypedSelector((state) => state.user);

  const renderPage = () => {
    if (!appLoadedStatus) {
      return <PreLoader />;
    }
    if (page === 'MANAGMENT_USERS') {
      return <ManageUsers />;
    }
    if (page === 'USER_INFO') {
      return <UserInfo />;
    }
    return null;
  };

  useEffect(() => {
    dispatch(getUserList());
    dispatch(getUserData());
    dispatch(onMessageChromeEvent());
  }, []);

  return (
    <div className={styles.App}>
      <Navigation page={page} setPage={setPage} />
      {renderPage()}
    </div>
  );
};
