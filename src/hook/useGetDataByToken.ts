import { useState } from 'react';
import { IPayloadUserByToken } from '@/types/userPayload';
import axios from 'axios';

const api = 'https://discordapp.com/api/v8/';

export const useGetDataByToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const getDataByToken = async (token: string) => {
    try {
      setIsLoading(true);

      const { data }: IPayloadUserByToken = await axios.get(`${api}users/@me`, {
        headers: {
          Authorization: token,
        },
      });

      const { avatar: avatarId, id, ...userData } = data;
      const avatar = `https://cdn.discordapp.com/avatars/${id}/${avatarId}.png?size=32`;

      setIsLoading(false);

      return { avatar, id, ...userData };
    } catch (e) {
      console.log(e);

      setErrorStatus(true);
      setIsLoading(false);

      return null;
    }
  };

  return {
    isLoading,
    errorStatus,
    getDataByToken,
  };
};
