import React from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import styles from './UserConfigItem.module.scss';

interface IProps {
  title: string;
  data: string;
}

export const UserConfigItem: React.FC<IProps> = ({ title, data, children }) => {
  const titleText = (
    <Typography variant="h2" className={styles.title}>
      {title}:
    </Typography>
  );
  const dataText = (
    <Typography variant="subtitle1" className={styles.data}>
      {data}
    </Typography>
  );

  return (
    <ListItem>
      <ListItemText primary={titleText} />
      <ListItemText primary={dataText} />
      {children}
    </ListItem>
  );
};
