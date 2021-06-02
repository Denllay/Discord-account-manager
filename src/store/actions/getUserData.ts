import { useGetCurrentTab } from '@/hook/useGetCurrentTab';
import { useTypedSendMessage } from '@/hook/useTypedSendMessage';
import { EnumChromeEvents } from '@/types/chromeEvents';
import { AppDispatch, AppThunk } from '..';
import { setUserData } from '../reducers/user';
import { checkTokenInList } from './checkTokenInList';

export const getUserData = (): AppThunk => async (dispatch: AppDispatch) => {
  const { id } = await useGetCurrentTab();

  const onGetResponse = (token: string) => {
    if (token && !chrome.runtime.lastError) {
      dispatch(setUserData(token));
      dispatch(checkTokenInList(token));
    }
  };

  useTypedSendMessage(id!, { action: EnumChromeEvents.GET_USER_DATA }, onGetResponse);
};
