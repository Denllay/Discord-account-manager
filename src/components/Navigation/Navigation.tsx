import React, { SetStateAction } from 'react';
import { Box, Tabs, Tab, Typography, withStyles } from '@material-ui/core';
import { IStyledTabsProps, TMenuPages, TOnchangeTab } from '@/types/navigation';
import { NavTab } from './NavTab';
import { Dispatch } from 'react';

interface IProps {
  activePage: TMenuPages;
  setActivePage: Dispatch<SetStateAction<TMenuPages>>;
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

export const Navigation: React.FC<IProps> = ({ activePage, setActivePage }) => {
  const onChangePage: TOnchangeTab = (_, newPage) => {
    setActivePage(newPage);
  };

  return (
    <Box alignItems="center" display="flex" bgcolor="#363636">
      <NavTabs value={activePage} onChange={onChangePage}>
        <NavTab label="Your account" value="USER_INFO" />
        <NavTab label="Accounts list" value="MANAGMENT_USERS" />
        <NavTab label="About info" value="ABOUT_INFO" />
      </NavTabs>
    </Box>
  );
};
