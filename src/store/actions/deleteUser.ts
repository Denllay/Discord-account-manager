import { AppDispatch, AppThunk } from '..';
import { deleteUserById } from '../reducers/userList';

export const deleteUser =
  (id: string): AppThunk =>
  (dispatch: AppDispatch, getStore) => {
    const { list } = getStore().userList;

    const formatUserList = JSON.stringify(list.filter((el) => el.id !== id));

    localStorage.setItem('userList', formatUserList);

    dispatch(deleteUserById(id));
  };
