import React, { SetStateAction } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Dispatch } from 'react';
import { TMenuStatus } from '@/types/navigation';

import styles from './Navigation.module.scss';

interface IProps {
  activeMenu: TMenuStatus;
  setActiveMenu: Dispatch<SetStateAction<TMenuStatus>>;
}

const activeBlockStyle: React.CSSProperties = {
  background: '#ffc700',
  color: '#fff',
};
const notActiveBlockStyle: React.CSSProperties = {
  background: '#212121',
  color: '#ffc700',
};

export const Navigation: React.FC<IProps> = ({ activeMenu, setActiveMenu }) => {
  const findActiveBlock = (menuStatus: TMenuStatus) => {
    if (activeMenu === menuStatus) {
      return activeBlockStyle;
    }
    return notActiveBlockStyle;
  };

  return (
    <Box display="flex">
      <Box style={findActiveBlock('USER_DATA')} className={styles.nav_block} onClick={() => setActiveMenu('USER_DATA')}>
        <Typography variant="h2" className={styles.nav_text}>
          Your fackin account
        </Typography>
      </Box>
      <Box
        style={findActiveBlock('MANAGMENT_USERS')}
        className={styles.nav_block}
        onClick={() => setActiveMenu('MANAGMENT_USERS')}
      >
        <Typography variant="h2" className={styles.nav_text}>
          Accounts management
        </Typography>
      </Box>
    </Box>
  );
};
