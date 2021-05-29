import React from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import styles from './UserConfigItem.module.scss';

interface IProps {
  title: string;
  data: string;
}
const maxDataLength = 30;

export const UserConfigItem: React.FC<IProps> = ({ title, data, children }) => {
  const cutData = () => {
    if (data.length >= maxDataLength) {
      return `${data.substr(0, 20)}...`;
    }
    return data;
  };

  const titleText = (
    <Typography variant="h2" className={styles.title}>
      {title}:
    </Typography>
  );
  const dataText = (
    <Typography variant="subtitle1" className={styles.data}>
      {cutData()}
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
