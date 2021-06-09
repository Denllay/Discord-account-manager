import React, { useState } from 'react';
import { FormAddUser } from '@/components/common/Form/FormAddUser';
import { Modal } from '@/components/UIkit/Modal';
import { Box, Button } from '@material-ui/core';

interface IProps {
  token: string;
}

export const ButtonAddUser: React.FC<IProps> = ({ token }) => {
  const [modalStatus, setModalStatus] = useState(false);

  const onAddUser = () => {
    setModalStatus(true);
  };

  const toggleUserModal = () => {
    setModalStatus((prev) => !prev);
  };

  const initialValuesForm = {
    token: token,
    name: '',
  };

  return (
    <>
      <Box mt={1}>
        <Button onClick={onAddUser} color="secondary">
          Add this account to list
        </Button>
      </Box>

      <Modal width="400px" height="300px" open={modalStatus} onClose={toggleUserModal}>
        <FormAddUser initialValues={initialValuesForm} toggleModal={toggleUserModal} />
      </Modal>
    </>
  );
};
