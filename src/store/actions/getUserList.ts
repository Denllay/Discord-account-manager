import { AppDispatch, AppThunk } from '..';
import { setUserList } from '../reducers/userList';

export const getUserList = (): AppThunk => (dispatch: AppDispatch) => {
  const listFromLocalStorage = localStorage.getItem('userList');
  const userList = listFromLocalStorage ? JSON.parse(listFromLocalStorage) : [];

  dispatch(setUserList(userList));
};
