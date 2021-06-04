import { EnumChromeEvents, TChromeEvents } from '@/types/chromeEvents';
import { Middleware } from '@reduxjs/toolkit';
import { setLoadedStatus } from '../reducers/user';

export const onChromeEvent: Middleware = (store) => (next) => (action) => {
  if (action.type === 'CHROME_EVENT_ON_MESSAGE') {
    chrome.runtime.onMessage.addListener((message: TChromeEvents) => {
      if (message.action === EnumChromeEvents.PAGE_LOADED && !chrome.runtime.lastError) {
        store.dispatch(setLoadedStatus(true));
      }
    });
  }
  return next(action);
};
