import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TMenuPages } from './types/navigation';
import { UserInfo } from './pages/UserInfo/UserInfo';
import { ManageUsers } from './pages/ManageUsers/ManageUsers';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserData } from './store/actions/getUserData';
import styles from './App.module.scss';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [activePage, setActivePage] = useState<TMenuPages>('USER_DATA');

  const renderMenu = () => {
    if (activePage === 'MANAGMENT_USERS') {
      return <ManageUsers />;
    }
    if (activePage === 'USER_DATA') {
      return <UserInfo />;
    }
    return null;
  };

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div className={styles.App}>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      {renderMenu()}
    </div>
  );
};
