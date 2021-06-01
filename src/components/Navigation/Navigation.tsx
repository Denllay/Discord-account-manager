import React, { SetStateAction } from 'react';
import { Box, Tabs, withStyles } from '@material-ui/core';
import { IStyledTabsProps, TAppPages, TOnchangeTab } from '@/types/navigation';
import { NavTab } from './NavTab';
import { Dispatch } from 'react';

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
  const onChangePage: TOnchangeTab = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Box alignItems="center" display="flex" bgcolor="#363636">
      <NavTabs value={page} onChange={onChangePage}>
        <NavTab label="Your account" value="USER_INFO" />
        <NavTab label="Accounts list" value="MANAGMENT_USERS" />
        <NavTab label="About info" value="ABOUT_INFO" />
      </NavTabs>
    </Box>
  );
};
