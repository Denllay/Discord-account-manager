import { AppDispatch, AppThunk } from '..';
import { setUser } from '../reducers/userList';
import { IUserListItem } from '../types/userList';

export const addUser =
  (data: IUserListItem): AppThunk =>
  (dispatch: AppDispatch, getState) => {
    const { list } = getState().userList;
    const localStorageData = JSON.stringify([...list, data]);

    localStorage.setItem('userList', localStorageData);
    dispatch(setUser(data));
  };
