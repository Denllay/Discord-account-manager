import React, { useState } from 'react';
import { IUserMoreData } from '@/types/userList';
import { Box, Button, Typography } from '@material-ui/core';
import { DataItem } from './DataItem';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { deleteUser } from '@/store/actions/deleteUser';
import { checkTokenInList } from '@/store/actions/checkTokenInList';
import { FormChangeData } from '@/components/Modals/Form/FormChangeData';
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

export const UserMoreData: React.FC<IProps> = ({ data }) => {
  const [changeDataStatus, setChangeDataStatus] = useState(false);
  const dispatch = useTypedDispatch();
  const { token, email, password, id } = data;

  const onDeleteUser = () => {
    dispatch(deleteUser(id));
    dispatch(checkTokenInList(token));
  };

  const userDataConfig = [
    {
      title: 'token',
      data: token,
    },
    {
      title: 'password',
      data: password,
    },
    {
      title: 'email',
      data: email,
    },
  ];

  const listUserData = userDataConfig.map(({ title, data }) => {
    return <DataItem title={title} data={data} />;
  });

  const toggleChangeData = () => {
    setChangeDataStatus((prev) => !prev);
  };

  const initialFormValues = formatEmptyData(data);

  return (
    <>
      <Box bgcolor="rgba(255, 255, 255, 0.2)">
        <Box display="flex" flexDirection="column" position="relative" mb={2}>
          {listUserData}
        </Box>

        <Box>
          <Button onClick={onDeleteUser}>
            <Typography color="error" variant="h2">
              DELETE ACCOUNT
            </Typography>
          </Button>

          <Button onClick={toggleChangeData}>
            <Typography color="secondary" variant="h2">
              CHANGE DATA
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
