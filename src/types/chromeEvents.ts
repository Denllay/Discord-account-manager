export enum EnumChromeEvents {
  GET_USER_DATA = 'GET_USER_DATA',
}

interface IGetUserData {
  action: EnumChromeEvents.GET_USER_DATA;
}

export interface ISetUserData {
  token: string | null;
  email: string | null;
}

export type TChromeEvents = IGetUserData;
export type TChromeResponseData = ISetUserData;
