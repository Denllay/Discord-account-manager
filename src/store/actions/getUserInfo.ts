import { AppDispatch, AppThunk } from '..';
import { setUserInfo } from '../reducers/user';

export const getUserInfo = (): AppThunk => (dispatch: AppDispatch) => {
  chrome.storage.local.get(['token', 'email'], ({ token, email }) => {
    dispatch(setUserInfo({ email: email.replace(/"/g, ''), token: token.replace(/"/g, '') }));
  });
};
