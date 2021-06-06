import React, { useEffect, useState } from 'react';
import { LoggedUser } from './LoggedUser/LoggedUser';
import { TUserStatus } from '@/types/user';
import { Unaccounted } from './Unaccounted/Unaccounted';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { useCheckIsDicrod } from '@/hook/useCheckIsDicrod';

export const UserInfo = () => {
  const [accountStatus, setAccountStatus] = useState<TUserStatus>('LOADING');
  const { token } = useTypedSelector((state) => state.user);
  const isDiscord = useCheckIsDicrod();

  useEffect(() => {
    if (isDiscord && token) {
      setAccountStatus('LOGGED_USER');
    }
    if (!token) {
      setAccountStatus('UNACCOUNTED');
    }
  }, [token, isDiscord]);

  const renderUserInfo = () => {
    switch (accountStatus) {
      case 'LOGGED_USER':
        return <LoggedUser />;

      case 'UNACCOUNTED':
        return <Unaccounted />;

      default:
        return null;
    }
  };

  return renderUserInfo();
};
