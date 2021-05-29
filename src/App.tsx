import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TMenuStatus } from './types/navigation';
import { UserInfo } from './pages/UserInfo/UserInfo';
import { ManageUsers } from './pages/ManageUsers/ManageUsers';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserData } from './store/actions/getUserData';
import styles from './App.module.scss';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [activeMenu, setActiveMenu] = useState<TMenuStatus>('MANAGMENT_USERS');

  const renderMenu = () => {
    if (activeMenu === 'MANAGMENT_USERS') {
      return <ManageUsers />;
    }
    if (activeMenu === 'USER_DATA') {
      return <UserInfo />;
    }
    return null;
  };

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div className={styles.App}>
      <Navigation activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className={styles.background_wrapper}>{renderMenu()}</div>
    </div>
  );
};
