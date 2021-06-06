import React from 'react';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { TopBlock } from './TopBlock';
import { UserList } from './UserList/UserList';
import background from '@/assets/img/background_account_list.png';

const bgWrapperStyle = {
  backgroundSize: 'contain',
  backgroundPosition: 'bottom',
};

export const ManageUsers = () => {
  return (
    <PageWrapper bgUrl={background} bgStyle={bgWrapperStyle}>
      <TopBlock />

      <UserList />
    </PageWrapper>
  );
};
