export interface IUserListState {
  list: IUserListItem[];
  tokenInList: boolean;
}

export interface IAddUserPayload {
  token: string;
  name: string;
  email: string;
  avatar: string;
}
export interface IUserListItem extends IAddUserPayload {
  id: string;
}

export interface ISetChangeData {
  data: IUserListItem;
  userIndex: number;
}
