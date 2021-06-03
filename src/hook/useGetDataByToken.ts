import { IPayloadUserByToken } from '@/types/userPayload';
import axios from 'axios';
import { useState } from 'react';

const apiUrl = 'https://discordapp.com/api/v8/users/@me';

export const useGetDataByToken = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getDataByToken = async (token: string) => {
    try {
      setIsLoading(true);

      const headers = {
        Authorization: token,
      };
      const { data }: IPayloadUserByToken = await axios.get(apiUrl, { headers });

      setIsLoading(false);
      return data;
    } catch (e) {
      console.log(e);

      setIsLoading(false);
      return null;
    }
  };
  return {
    isLoading,
    getDataByToken,
  };
};
