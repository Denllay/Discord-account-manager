import { useEffect, useState } from 'react';

export const useCheckIsDicrod = () => {
  const [isDiscord, setIsDiscord] = useState(false);

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([{ url }]) => {
      const isRequireUrl = /^https:\/\/discord\.com(\/.*$)?/.test(url!);

      if (isRequireUrl) {
        setIsDiscord(true);
      } else {
        setIsDiscord(false);
      }
    });
  }, []);
  return isDiscord;
};
