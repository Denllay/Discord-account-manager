import React, { useState } from 'react';
import { FormAddUser } from '@/components/Modals/Form/FormAddUser';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { Box, Button } from '@material-ui/core';
import { useTypedSelector } from '@/hook/useTypedSelector';

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

      <Modal width="400px" height="300px" onOpen={statusUserModal} toggleModal={toggleUserModal}>
        <FormAddUser initialValues={initialValuesForm} toggleModal={toggleUserModal} />
      </Modal>
    </>
  ) : null;
};
