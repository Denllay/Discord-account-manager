import { AppDispatch, AppThunk } from '..';
import { setUser } from '../reducers/userList';
import { IAddUserPayload } from '../types/userList';

export const addUser =
  ({ token, ...data }: IAddUserPayload): AppThunk =>
  (dispatch: AppDispatch, getState) => {
    const newUser = {
      id: `id_${Math.random() * Date.now()}`.replace(/\./g, ''),
      token,
      ...data,
    };

    const { list } = getState().userList;

    localStorage.setItem('userList', JSON.stringify([...list, newUser]));

    dispatch(setUser(newUser));
  };
