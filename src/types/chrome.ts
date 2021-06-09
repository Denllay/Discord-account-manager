export enum EnumChromeEvents {
  GET_USER_DATA = 'GET_USER_DATA',
  PAGE_LOADED = 'PAGE_LOADED',
  LOGIN_USER = 'LOGIN_USER',
}

interface IGetUserData {
  action: EnumChromeEvents.GET_USER_DATA;
}
interface ILoginUser {
  action: EnumChromeEvents.LOGIN_USER;
  data: string;
}
interface IGetPageLoaded {
  action: EnumChromeEvents.PAGE_LOADED;
}
export type TChromeEvents = IGetUserData | ILoginUser | IGetPageLoaded;
export type TChromeResponseData = string;
