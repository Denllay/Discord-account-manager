import { ISetUserData } from '@/types/chromeEvents';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../types/user';

const initialState: IUserState = {
  token: null,
  email: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<ISetUserData>) {
      const { token, email } = payload;

      state.token = token;
      state.email = email;
    },
  },
});
export default user.reducer;

export const { setUserData } = user.actions;
