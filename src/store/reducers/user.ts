import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../types/user';

const initialState: IUserState = {
  token: null,
  appLoadedStatus: true,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },

    setLoadedStatus(state, { payload }: PayloadAction<boolean>) {
      state.appLoadedStatus = payload;
    },
  },
});
export default user.reducer;

export const { setUserData, setLoadedStatus } = user.actions;
