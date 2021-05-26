import React from 'react';
import { List } from '@material-ui/core';
import { usertListConfig } from './config';
import { UserConfigItem } from './UserConfigItem/UserConfigItem';
import { UserConfigToken } from './UserConfigItem/UserConfigToken';

export const LoggedAccount = () => {
  const userListConfigNode = usertListConfig.map(({ title, data }) => {
    if (title === 'TOKEN') {
      return (
        <UserConfigItem data={data} title={title} key={title}>
          <UserConfigToken data={data} />
        </UserConfigItem>
      );
    }
    return <UserConfigItem data={data} title={title} key={title} />;
  });
  return (
    <div>
      <List>{userListConfigNode}</List>
    </div>
  );
};
