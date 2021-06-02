import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { onChromeEvent } from './middleware/onChromeEvent';

import user from './reducers/user';
import userList from './reducers/userList';

export const store = configureStore({
  reducer: { user: user, userList: userList },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(onChromeEvent),
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, AnyAction>;
