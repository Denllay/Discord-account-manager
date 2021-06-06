import { AppDispatch, AppThunk } from '..';
import { setTheme } from '../reducers/user';

export const setThemeLocalStorage =
  (isDarkMode: boolean): AppThunk =>
  (dispatch: AppDispatch) => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));

    dispatch(setTheme(isDarkMode));
  };
