import { IPayloadUserByToken } from '@/types/userPayload';
import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';

const apiUrl = 'https://discordapp.com/api/v8/users/@me';

export const useGetDataByToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const getDataByToken = async (token: string) => {
    try {
      setIsLoading(true);

      const { data }: IPayloadUserByToken = await axios.get(apiUrl, {
        headers: {
          Authorization: token,
        },
      });

      setIsLoading(false);
      return data;
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
