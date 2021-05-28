import { useGetCurrentTab } from '@/hook/useGetCurrentTab';
import { useTypedSendMessage } from '@/hook/useTypedSendMessage';
import { EnumChromeEvents, ISetUserData } from '@/types/chromeEvents';
import { AppDispatch, AppThunk } from '..';
import { setUserData } from '../reducers/user';

export const getUserData = (): AppThunk => async (dispatch: AppDispatch) => {
  const { id } = await useGetCurrentTab();

  const onGetResponse = ({ token, email }: ISetUserData) => {
    if (token && email && !chrome.runtime.lastError) {
      dispatch(setUserData({ token, email }));
    }
  };

  useTypedSendMessage(id!, { action: EnumChromeEvents.GET_USER_DATA }, onGetResponse);
};
