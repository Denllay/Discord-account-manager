export type TMenuPages = 'USER_INFO' | 'MANAGMENT_USERS' | 'ABOUT_INFO';
export interface IStyledTabsProps {
  value: TMenuPages;
  onChange: TOnchangeTab;
}
export type TOnchangeTab = (event: React.ChangeEvent<{}>, newPage: TMenuPages) => void;
export interface IStyledTabProps {
  value: TMenuPages;
  label: string;
}
