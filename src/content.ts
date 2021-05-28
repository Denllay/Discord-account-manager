import { EnumChromeEvents, TChromeEvents } from './types/chromeEvents';

chrome.runtime.onMessage.addListener((message: TChromeEvents, _, sendResponse) => {
  switch (message.action) {
    case EnumChromeEvents.GET_USER_DATA: {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email_cache');

      if (token && email) {
        const tokenData = token.replace(/"/g, '');
        const emailData = email.replace(/"/g, '');

        sendResponse({ token: tokenData, email: emailData });
      } else {
        sendResponse({ token, email });
      }
      break;
    }
    default:
      console.error('Unrecognised message: ', message);
  }
});
