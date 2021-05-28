import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserListItem, IUserListState } from '../types/userList';

const initialState: IUserListState = {
  list: [],
};

const userList = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    getUserList(state, { payload }: PayloadAction<IUserListItem[]>) {
      state.list = payload;
    },
  },
});

export default userList.reducer;
export const { getUserList } = userList.actions;
