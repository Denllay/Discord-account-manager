import React from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
interface IProps {
  title: string;
  data: string;
}
const maxDataLength = 30;

export const UserConfigItem: React.FC<IProps> = ({ title, data, children }) => {
  const formatData = data.length >= maxDataLength ? `${data.substr(0, 20)}...` : data;

  const titleText = <Typography variant="h2">{title}:</Typography>;
  const dataText = <Typography variant="subtitle1">{formatData}</Typography>;

  return (
    <ListItem>
      <ListItemText primary={titleText} />
      <ListItemText primary={dataText} />
      {children}
    </ListItem>
  );
};
