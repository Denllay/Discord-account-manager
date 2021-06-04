import { IUserInfoList } from '@/types/userList';
import { AppDispatch, AppThunk } from '..';
import { setChangeData } from '../reducers/userList';

export const changeUserData =
  (data: IUserInfoList): AppThunk =>
  (dispatch: AppDispatch, getState) => {
    const { list } = getState().userList;
    const copyList = JSON.parse(JSON.stringify(list));
    const changeUserIndex = list.findIndex((el) => el.id === data.id);

    copyList[changeUserIndex] = data;
    localStorage.setItem('userList', JSON.stringify(copyList));

    dispatch(setChangeData({ data, userIndex: changeUserIndex }));
  };
