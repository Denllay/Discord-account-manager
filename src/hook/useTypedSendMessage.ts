import { TChromeEvents, TChromeResponseData } from '@/types/chromeEvents';

type TUseTypedSendMessage = (id: number, message: TChromeEvents, responseCallback: TCallback) => void;
type TCallback = (data: TChromeResponseData) => void;

export const useTypedSendMessage: TUseTypedSendMessage = (id, message, responseCallback) => {
  chrome.tabs.sendMessage(id, message, responseCallback);
};
