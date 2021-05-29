import React from 'react';
import { List } from '@material-ui/core';
import { UserConfigItem } from './UserConfigItem/UserConfigItem';
import { UserConfigCopy } from './UserConfigItem/UserConfigCopy';
import { useTypedSelector } from '@/hook/useTypedSelector';

export const LoggedUser = () => {
  const { token, email } = useTypedSelector((state) => state.user);

  const usertListConfig = [
    {
      title: 'TOKEN',
      data: token!,
    },
    {
      title: 'EMAIL',
      data: email!,
    },
  ];

  const userListConfigNode = usertListConfig.map(({ title, data }) => {
    if (title === 'TOKEN' || title === 'EMAIL') {
      return (
        <UserConfigItem data={data} title={title} key={title}>
          <UserConfigCopy data={data} />
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