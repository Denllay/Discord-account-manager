import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../types/user';

const initialState: IUserState = {
  token: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
  },
});
export default user.reducer;

export const { setUserData } = user.actions;
