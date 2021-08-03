import React, { Dispatch, SetStateAction } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { PreLoader } from './components/PreLoader/PreLoader';
import { useTypedSelector } from './hook/useTypedSelector';
import { AboutInfo } from './pages/AboutInfo/AboutInfo';
import { ManageUsers } from './pages/ManageUsers/ManageUsers';
import { UserInfo } from './pages/UserInfo/UserInfo';
import { TAppPages } from './types/navigation';

interface IProps {
  page: TAppPages;
  setPage: Dispatch<SetStateAction<TAppPages>>;
}

export const Renderer: React.FC<IProps> = ({ page, setPage }) => {
  const { appLoadedStatus } = useTypedSelector((state) => state.user);

  const renderPage = () => {
    switch (page) {
      case 'ABOUT_INFO':
        return <AboutInfo />;

      case 'MANAGMENT_USERS':
        return <ManageUsers />;

      case 'USER_INFO':
        return <UserInfo />;

      default:
        return null;
    }
  };

  if (!appLoadedStatus) return <PreLoader />;

  return (
    <>
      <Navigation page={page} setPage={setPage} />
      {renderPage()}
    </>
  );
};
