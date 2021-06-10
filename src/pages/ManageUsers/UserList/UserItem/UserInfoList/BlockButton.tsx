import React, { useState } from 'react';
import { IUserInfoList } from '@/types/userList';
import { Box, Button, Typography } from '@material-ui/core';
import { Modal } from '@/components/common/Modal';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { deleteUser } from '@/store/actions/deleteUser';
import { checkTokenInList } from '@/store/actions/checkTokenInList';
import { FormChangeData } from '@/components/Form/FormChangeData';
import { loginUser } from '@/store/actions/loginUser';
import { useCheckIsDicrod } from '@/hook/useCheckIsDicrod';
import { ToolTipButton } from '@/components/Button/ToolTipButton';
import { useFormatDataObj } from '@/hook/useFormatData';
import { onMessageChromeEvent } from '@/store/actions/onMessageChromeEvent';

interface IProps {
  data: IUserInfoList;
}

export const BlockButton: React.FC<IProps> = ({ data }) => {
  const dispatch = useTypedDispatch();
  const formatDataObj = useFormatDataObj();
  const isDiscord = useCheckIsDicrod();
  const [changeDataStatus, setChangeDataStatus] = useState(false);

  const { token, id } = data;
  const initialFormChangeData = formatDataObj(data, '-', '');

  const onDeleteUser = () => {
    dispatch(deleteUser(id));
    dispatch(checkTokenInList(token));
  };

  const toggleChangeData = () => {
    setChangeDataStatus((prev) => !prev);
  };

  const login = () => {
    dispatch(loginUser(token));
    dispatch(onMessageChromeEvent());
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
          <ToolTipButton title="You must be on discord" placement="top-end" arrow onClick={login} disabled={!isDiscord}>
            <Typography color="secondary" variant="button">
              LOGIN
            </Typography>
          </ToolTipButton>
        </Box>
      </Box>

      <Modal width="400px" height="300px" open={changeDataStatus} onClose={toggleChangeData}>
        <FormChangeData data={initialFormChangeData} toggleModal={toggleChangeData} />
      </Modal>
    </>
  );
};
