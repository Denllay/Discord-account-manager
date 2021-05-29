import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddUserPayload, IUserListItem, IUserListState } from '../types/userList';

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

    setUser(state, { payload }: PayloadAction<IAddUserPayload>) {
      state.list.push(payload);
    },
  },
});

export default userList.reducer;
export const { setUserList, setUser } = userList.actions;
