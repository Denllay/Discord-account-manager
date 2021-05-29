import { AppDispatch, AppThunk } from '..';
import { setUser } from '../reducers/userList';
import { IAddUserPayload } from '../types/userList';

export const addUser =
  (data: IAddUserPayload): AppThunk =>
  (dispatch: AppDispatch, getState) => {
    const newUser = {
      ...data,
      id: `id_${Math.random() * Date.now()}`.replace(/\./g, ''),
    };

    const { list } = getState().userList;
    const localStorageData = JSON.stringify([...list, newUser]);

    localStorage.setItem('userList', localStorageData);
    dispatch(setUser(newUser));
  };
