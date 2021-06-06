import { AppDispatch, AppThunk } from '..';
import { setTheme } from '../reducers/user';

export const getTheme = (): AppThunk => (dispatch: AppDispatch) => {
  const isDarkModeLocalStorage = localStorage.getItem('isDarkMode');
  const isDarkMode = isDarkModeLocalStorage ? JSON.parse(isDarkModeLocalStorage) : false;

  dispatch(setTheme(isDarkMode));
};
