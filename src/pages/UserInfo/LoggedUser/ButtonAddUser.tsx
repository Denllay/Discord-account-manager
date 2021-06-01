import React, { useEffect, useState } from 'react';
import { TokenForm } from '@/components/Modals/Form/TokenForm';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { Box, Button } from '@material-ui/core';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { checkTokenInList } from '@/store/actions/checkTokenInList';

interface IProps {
  token: string;
}

export const ButtonAddUser: React.FC<IProps> = ({ token }) => {
  const [statusUserModal, setStatusUserModal] = useState(false);
  const tokenInList = useTypedSelector((state) => state.userList.tokenInList);

  const onAddUser = () => {
    setStatusUserModal(true);
  };

  const toggleUserModal = () => {
    setStatusUserModal((prev) => !prev);
  };

  const initialValuesForm = {
    token: token,
    name: '',
  };

  return !tokenInList ? (
    <>
      <Box mt={1}>
        <Button onClick={onAddUser} color="secondary">
          Add this account to list
        </Button>
      </Box>

      <Modal width="400px" height="220px" statusModal={statusUserModal} toggleModal={toggleUserModal}>
        <TokenForm initialValues={initialValuesForm} toggleModal={toggleUserModal} />
      </Modal>
    </>
  ) : null;
};
