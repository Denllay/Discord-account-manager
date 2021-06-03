import { useGetCurrentTab } from '@/hook/useGetCurrentTab';
import { useTypedSendMessage } from '@/hook/useTypedSendMessage';
import { EnumChromeEvents } from '@/types/chromeEvents';
import { AppDispatch, AppThunk } from '..';
import { setAppStatus, setUserData } from '../reducers/user';

export const loginUser =
  (token: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const { id } = await useGetCurrentTab();

    const onGetResponse = () => {
      if (!chrome.runtime.lastError) {
        dispatch(setUserData(token));
        dispatch(setAppStatus(false));
      }
    };

    useTypedSendMessage(id!, { action: EnumChromeEvents.LOGIN_USER, data: token }, onGetResponse);
  };