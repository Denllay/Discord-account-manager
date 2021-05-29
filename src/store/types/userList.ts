export interface IUserListState {
  list: IUserListItem[];
}

export interface IAddUserPayload {
  token: string;
  name: string;
  email: string;
  password: string;
}
export interface IUserListItem extends IAddUserPayload {
  id: string;
}
