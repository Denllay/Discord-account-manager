export type TUserStatus = 'LOGGED_USER' | 'UNACCOUNTED' | 'LOADING';

export interface IUserInfoList {
  email: string;
  token: string;
  name: string;
  avatar: string;
  id: string;
}

export interface IPayloadUserByToken {
  data: {
    avatar: string;
    discriminator: string;
    email: string;
    flags: number;
    id: string;
    locale: string;
    mfa_enabled: boolean;
    nsfw_allowed: true;
    phone: string;
    public_flags: number;
    username: string;
    verified: boolean;
  };
}
