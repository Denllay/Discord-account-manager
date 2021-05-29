export interface IUserListState {
  list: IUserListItem[];
}

export interface IUserListItem {
  token: string;
  name: string;
  email: string;
  password: string;
}

export interface IAddUserPayload extends IUserListItem {}
