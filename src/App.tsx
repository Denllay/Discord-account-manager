import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TMenuStatus } from './types/navigation';
import { AccountInfo } from './pages/AccountInfo/AccountInfo';
import { Logo } from './components/Logo/Logo';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserInfo } from './store/actions/getUserInfo';
import styles from './App.module.scss';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [activeMenu, setActiveMenu] = useState<TMenuStatus>('USER_ACCOUNT');

  const menuList = {
    USER_ACCOUNT: <AccountInfo />,
    MANAGMENT_ACCOUNTS: null,
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className={styles.App}>
      <Navigation activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {menuList[activeMenu]}
      <Logo />
    </div>
  );
};
