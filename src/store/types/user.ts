export interface IUserState {
  token: string | null;
  email: string | null;
}
export interface ISetUserInfo extends IUserState {}
