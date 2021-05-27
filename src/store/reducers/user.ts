import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUserInfo, IUserState } from '../types/user';

const initialState: IUserState = {
  token: null,
  email: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<ISetUserInfo>) {
      const { token, email } = payload;

      state.token = token;
      state.email = email;
    },
  },
});
export default user.reducer;

export const { setUserInfo } = user.actions;
