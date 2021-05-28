import React, { useEffect, useState } from 'react';
import { LoggedAccount } from './LoggedAccount/LoggedAccount';
import { TAccountStatus } from '@/types/account';
import { Unaccounted } from './Unaccounted/Unaccounted';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { useCheckIsDicrod } from '@/hook/useCheckIsDicrod';

export const AccountInfo = () => {
  const [accountStatus, setAccountStatus] = useState<TAccountStatus>('unaccounted');
  const { token } = useTypedSelector((state) => state.user);
  const isDiscord = useCheckIsDicrod();

  useEffect(() => {
    if (isDiscord && token) {
      setAccountStatus('loggedAccount');
    } else {
      setAccountStatus('unaccounted');
    }
  });

  const accountNodeList = {
    loggedAccount: <LoggedAccount />,
    unaccounted: <Unaccounted isDiscord={isDiscord} />,
  };

  return accountNodeList[accountStatus];
};
