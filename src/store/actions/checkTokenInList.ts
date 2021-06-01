import { AppDispatch, AppThunk } from '..';
import { setTokenStatus } from '../reducers/userList';

export const checkTokenInList =
  (token: string): AppThunk =>
  (dispatch: AppDispatch, getStore) => {
    const { list } = getStore().userList;
    const tokenInList = !!list.find((el) => el.token === token);

    dispatch(setTokenStatus(tokenInList));
  };
