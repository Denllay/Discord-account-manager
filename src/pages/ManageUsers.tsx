import React from 'react';
import { PageWrapper } from '@/components/common/Containers/PageWrapper';
import { TopBlock } from '../components/ManageUsers/TopBlock';
import { UserList } from '../components/common/Lists/UserList/UserList';
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
