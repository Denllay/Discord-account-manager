import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { TMenuStatus } from './types/navigation';
import { AccountInfo } from './pages/AccountInfo/AccountInfo';
import { ManageAccounts } from './pages/ManageAccounts/ManageAccounts';
import { useTypedDispatch } from './hook/useAppDispatch';
import { getUserData } from './store/actions/getUserData';
import styles from './App.module.scss';

export const App = () => {
  const dispatch = useTypedDispatch();
  const [activeMenu, setActiveMenu] = useState<TMenuStatus>('MANAGMENT_ACCOUNTS');

  const menuList = {
    USER_ACCOUNT: <AccountInfo />,
    MANAGMENT_ACCOUNTS: <ManageAccounts />,
  };

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div className={styles.App}>
      <Navigation activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {menuList[activeMenu]}
    </div>
  );
};
