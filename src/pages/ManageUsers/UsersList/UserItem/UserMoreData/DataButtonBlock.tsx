import React, { useState } from 'react';
import { IUserMoreData } from '@/types/userList';
import { Box, Button, Typography } from '@material-ui/core';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { deleteUser } from '@/store/actions/deleteUser';
import { checkTokenInList } from '@/store/actions/checkTokenInList';
import { FormChangeData } from '@/components/Modals/Form/FormChangeData';
import { loginUser } from '@/store/actions/loginUser';

interface IProps {
  data: IUserMoreData;
}

const formatEmptyData = (data: IUserMoreData) => {
  let result: IUserMoreData = {} as IUserMoreData;
  type TEl = keyof IUserMoreData;

  for (const el in data) {
    if (data[el as TEl] !== '-') {
      result[el as TEl] = data[el as TEl];
    } else {
      result[el as TEl] = '';
    }
  }
  return result;
};

export const DataButtonBlock: React.FC<IProps> = ({ data }) => {
  const [changeDataStatus, setChangeDataStatus] = useState(false);
  const dispatch = useTypedDispatch();

  const { token, id } = data;
  const initialFormValues = formatEmptyData(data);

  const onDeleteUser = () => {
    dispatch(deleteUser(id));
    dispatch(checkTokenInList(token));
  };

  const toggleChangeData = () => {
    setChangeDataStatus((prev) => !prev);
  };

  const onLogin = () => {
    dispatch(loginUser(token));
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Button onClick={onDeleteUser}>
            <Typography color="error" variant="button">
              DELETE ACCOUNT
            </Typography>
          </Button>

          <Button onClick={toggleChangeData}>
            <Typography color="secondary" variant="button">
              CHANGE DATA
            </Typography>
          </Button>
        </Box>
        <Box mr={3}>
          <Button onClick={onLogin}>
            <Typography color="secondary" variant="button">
              LOGIN
            </Typography>
          </Button>
        </Box>
      </Box>

      <Modal width="400px" height="300px" onOpen={changeDataStatus} toggleModal={toggleChangeData}>
        <FormChangeData data={initialFormValues} toggleModal={toggleChangeData} />
      </Modal>
    </>
  );
};
