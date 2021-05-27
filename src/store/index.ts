import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';

import user from './reducers/user';

export const store = configureStore({
  reducer: { user: user },
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, AnyAction>;
