import React, { useEffect, useState } from 'react';
import { LoggedAccount } from './LoggedAccount/LoggedAccount';
import { TAccountStatus } from '@/types/account';
import { Unaccounted } from './Unaccounted/Unaccounted';

export const AccountInfo = () => {
  const [accountStatus, setAccountStatus] = useState<TAccountStatus>('unaccounted');

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([{ url }]) => {
      const isDiscord = /^https:\/\/discord\.com(\/.*$)?/.test(url!);
      const status: TAccountStatus = isDiscord ? 'loggedAccount' : 'unaccounted';

      setAccountStatus(status);
    });
  });

  const accountNodeList = {
    loggedAccount: <LoggedAccount />,
    unaccounted: <Unaccounted />,
  };
  return accountNodeList[accountStatus];
};
