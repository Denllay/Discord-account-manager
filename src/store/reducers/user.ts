import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../types/user';

const initialState: IUserState = {
  token: null,
  appLoadedStatus: true,
  isDarkMode: true,
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

    setTheme(state, { payload }: PayloadAction<boolean>) {
      state.isDarkMode = payload;
    },
  },
});

export default user.reducer;

export const { setUserData, setLoadedStatus, setTheme } = user.actions;
