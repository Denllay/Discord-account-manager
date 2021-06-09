import React, { SetStateAction } from 'react';
import { IStyledTabsProps, TAppPages, TOnchangeTab } from '@/types/app';
import { Box, Tabs, withStyles } from '@material-ui/core';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { NavTab } from './NavTab';
import { Dispatch } from 'react';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { setThemeLocalStorage } from '@/store/actions/setThemeLocalStorage';

interface IProps {
  page: TAppPages;
  setPage: Dispatch<SetStateAction<TAppPages>>;
}

const NavTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      height: '2px',
      width: '100%',
      backgroundColor: '#FFC700',
    },
  },
})((props: IStyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const Navigation: React.FC<IProps> = ({ page, setPage }) => {
  const { isDarkMode } = useTypedSelector((state) => state.user);
  const dispatch = useTypedDispatch();

  const onChangePage: TOnchangeTab = (_, newPage) => {
    setPage(newPage);
  };

  const onChangeTheme = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setThemeLocalStorage(target.checked));
  };

  return (
    <Box alignItems="center" display="flex" justifyContent="space-between" bgcolor="#363636">
      <NavTabs value={page} onChange={onChangePage}>
        <NavTab label="Your account" value="USER_INFO" />

        <NavTab label="Accounts list" value="MANAGMENT_USERS" />

        <NavTab label="About info" value="ABOUT_INFO" />
      </NavTabs>

      <Box mr={3}>
        <SwitchTheme onChange={onChangeTheme} checked={isDarkMode} />
      </Box>
    </Box>
  );
};
