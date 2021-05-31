import React, { useState } from 'react';
import { TokenForm } from '@/components/Modals/Form/TokenForm';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { Box, Button } from '@material-ui/core';
import { useTypedSelector } from '@/hook/useTypedSelector';

interface IProps {
  token: string;
}

export const ButtonAddUser: React.FC<IProps> = ({ token }) => {
  const [statusUserModal, setStatusUserModal] = useState(false);
  const userList = useTypedSelector((state) => state.userList.list);

  const isDuplicate = !userList.find((el) => el.token === token);

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
  return isDuplicate ? (
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
