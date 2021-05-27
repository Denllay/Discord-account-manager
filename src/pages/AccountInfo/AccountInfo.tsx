import React, { useEffect, useState } from 'react';
import { LoggedAccount } from './LoggedAccount/LoggedAccount';
import { TAccountStatus } from '@/types/account';
import { Unaccounted } from './Unaccounted/Unaccounted';
import { useTypedSelector } from '@/hook/useTypedSelector';

export const AccountInfo = () => {
  const [accountStatus, setAccountStatus] = useState<TAccountStatus>('unaccounted');
  const { token } = useTypedSelector((state) => state.user);

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([{ url }]) => {
      const isDiscord = /^https:\/\/discord\.com(\/.*$)?/.test(url!);

      if (isDiscord && token) {
        setAccountStatus('loggedAccount');
      } else {
        setAccountStatus('unaccounted');
      }
    });
  });

  const accountNodeList = {
    loggedAccount: <LoggedAccount />,
    unaccounted: <Unaccounted />,
  };

  return accountNodeList[accountStatus];
};
