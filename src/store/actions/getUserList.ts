import { AppDispatch, AppThunk } from '..';
import { setUserList } from '../reducers/userList';

export const getUserList = (): AppThunk => (dispatch: AppDispatch) => {
  const listFromLocalStorage = localStorage.getItem('userList');
  const userList = listFromLocalStorage ? JSON.parse(listFromLocalStorage) : [];
  console.log(userList);
  console.log(listFromLocalStorage);

  dispatch(setUserList(userList));
};
