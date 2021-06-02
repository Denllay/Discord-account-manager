export enum EnumChromeEvents {
  GET_USER_DATA = 'GET_USER_DATA',
  LOGIN_USER = 'LOGIN_USER',
}

interface IGetUserData {
  action: EnumChromeEvents.GET_USER_DATA;
}
interface ILoginUser {
  action: EnumChromeEvents.LOGIN_USER;
  data: string;
}

export type TChromeEvents = IGetUserData | ILoginUser;
export type TChromeResponseData = string;
