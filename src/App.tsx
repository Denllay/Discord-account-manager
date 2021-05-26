import React from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TMenuStatus } from './types/navigation';
import { AccountInfo } from './pages/AccountInfo/AccountInfo';
import styles from './App.module.scss';
import { Logo } from './components/Logo/Logo';

export const App = () => {
  const [activeMenu, setActiveMenu] = useState<TMenuStatus>('USER_ACCOUNT');
  const menuList = {
    USER_ACCOUNT: <AccountInfo />,
    MANAGMENT_ACCOUNTS: null,
  };

  return (
    <div className={styles.App}>
      <Navigation activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {menuList[activeMenu]}
      <Logo />
    </div>
  );
};
