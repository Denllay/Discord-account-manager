import { EnumChromeEvents, TChromeEvents } from '@/types/chromeEvents';
import { Middleware } from '@reduxjs/toolkit';
import { setAppStatus } from '../reducers/user';

export const onChromeEvent: Middleware = (store) => (next) => (action) => {
  if (action.type === 'CHROME_EVENT_ON_MESSAGE') {
    chrome.runtime.onMessage.addListener((message: TChromeEvents) => {
      if (message.action === EnumChromeEvents.PAGE_LOADED && !chrome.runtime.lastError) {
        store.dispatch(setAppStatus(true));
      }
    });
  }
  return next(action);
};
