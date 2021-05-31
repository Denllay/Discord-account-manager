import React, { useEffect, useState } from 'react';
import { LoggedUser } from './LoggedUser/LoggedUser';
import { TUserStatus } from '@/types/user';
import { Unaccounted } from './Unaccounted/Unaccounted';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { useCheckIsDicrod } from '@/hook/useCheckIsDicrod';

export const UserInfo = () => {
  const [accountStatus, setAccountStatus] = useState<TUserStatus>('UNACCOUNTED');
  const { token } = useTypedSelector((state) => state.user);
  const isDiscord = useCheckIsDicrod();

  useEffect(() => {
    if (isDiscord && token) {
      setAccountStatus('LOGGED_USER');
    } else {
      setAccountStatus('UNACCOUNTED');
    }
  });

  const renderInfoByStatus = () => {
    if (accountStatus === 'LOGGED_USER') {
      return <LoggedUser />;
    }
    if (accountStatus === 'UNACCOUNTED') {
      return <Unaccounted isDiscord={isDiscord} />;
    }
    return null;
  };

  return renderInfoByStatus();
};
