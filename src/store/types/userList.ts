export interface IUserListState {
  list: never[] | IUserListItem[];
}

export interface IUserListItem {
  token: string;
  nickName: string;
  email: string;
}
