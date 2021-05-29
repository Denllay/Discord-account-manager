import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserListItem, IUserListState } from '../types/userList';

const initialState: IUserListState = {
  list: [],
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
  },
});

export default userList.reducer;
export const { setUserList, setUser, deleteUserById } = userList.actions;
