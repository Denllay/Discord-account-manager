export type TAppPages = 'USER_INFO' | 'MANAGMENT_USERS' | 'ABOUT_INFO';
export interface IStyledTabsProps {
  value: TAppPages;
  onChange: TOnchangeTab;
}
export type TOnchangeTab = (event: React.ChangeEvent<{}>, newPage: TAppPages) => void;
export interface IStyledTabProps {
  value: TAppPages;
  label: string;
}

export type TFormStatus = 'TOKEN' | 'BASIC' | 'CHOICE';

export type TCopyAlertMode = 'success' | 'error';
