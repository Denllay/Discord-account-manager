import { EnumChromeEvents, TChromeEvents } from './types/chromeEvents';

chrome.runtime.onMessage.addListener((message: TChromeEvents, _, sendResponse) => {
  switch (message.action) {
    case EnumChromeEvents.GET_USER_DATA: {
      const token = localStorage.getItem('token');
      const formatToken = token && token.replace(/"/g, '');

      sendResponse(formatToken);
      break;
    }

    case EnumChromeEvents.LOGIN_USER: {
      const iframe = document.createElement('iframe');

      setInterval(() => {
        document.body.appendChild(iframe).contentWindow!.localStorage.token = `"${message.data}"`;
      }, 50);

      setTimeout(() => {
        location.reload();
      }, 2500);

      sendResponse();
      break;
    }

    default:
      console.error('Unrecognised message: ', message);
  }
});
