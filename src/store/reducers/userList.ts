import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetChangeData, IUserListItem, IUserListState } from '../types/userList';

const initialState: IUserListState = {
  list: [],
  tokenInList: false,
};

const userList = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setUserList(state, { payload }: PayloadAction<IUserListItem[]>) {
      state.list = payload;
    },

    setUser(state, { payload }: PayloadAction<IUserListItem>) {
      state.list.push(payload);
    },

    deleteUserById(state, { payload }: PayloadAction<string>) {
      state.list = state.list.filter((el) => el.id !== payload);
    },

    setTokenStatus(state, { payload }: PayloadAction<boolean>) {
      state.tokenInList = payload;
    },

    setChangeData(state, { payload: { data, changeIndex } }: PayloadAction<ISetChangeData>) {
      console.log(data);
      console.log(changeIndex);

      state.list[changeIndex] = data;
    },
  },
});

export default userList.reducer;
export const { setUserList, setUser, deleteUserById, setTokenStatus, setChangeData } = userList.actions;
