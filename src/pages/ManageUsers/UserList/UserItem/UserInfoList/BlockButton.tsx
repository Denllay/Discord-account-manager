import React, { useState } from 'react';
import { IUserInfoList } from '@/types/userList';
import { Box, Button, Fade, Typography, Tooltip } from '@material-ui/core';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { deleteUser } from '@/store/actions/deleteUser';
import { checkTokenInList } from '@/store/actions/checkTokenInList';
import { FormChangeData } from '@/components/Modals/Form/FormChangeData';
import { loginUser } from '@/store/actions/loginUser';
import { useCheckIsDicrod } from '@/hook/useCheckIsDicrod';
import { ToolTipButton } from '@/components/UIkit/Button/ToolTipButton/ToolTipButton';
import { useFormatDataObj } from '@/hook/useFormatData';

interface IProps {
  data: IUserInfoList;
}

export const DataButtonBlock: React.FC<IProps> = ({ data }) => {
  const dispatch = useTypedDispatch();
  const formatDataObj = useFormatDataObj();
  const isDiscord = useCheckIsDicrod();
  const [changeDataStatus, setChangeDataStatus] = useState(false);

  const { token, id } = data;
  const initialFormValues = formatDataObj(data, '-', '');

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
          <ToolTipButton title="You must be on discord" placement="top-end" arrow onClick={onLogin} disabled={!isDiscord}>
            <Typography color="secondary" variant="button">
              LOGIN
            </Typography>
          </ToolTipButton>
        </Box>
      </Box>

      <Modal width="400px" height="300px" onOpen={changeDataStatus} toggleModal={toggleChangeData}>
        <FormChangeData data={initialFormValues} toggleModal={toggleChangeData} />
      </Modal>
    </>
  );
};
