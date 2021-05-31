import React, { useState } from 'react';
import { ListButton } from '@/components/UIkit/Button/ListButton/ListButton';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { AddUserModal } from './AddUserModal';
import IconPlus from '@/assets/svg/iconPlus.svg';

export const AddUser = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const toggleModal = () => {
    setModalStatus((prev) => !prev);
  };
  return (
    <>
      <ListButton bgcolor="rgba(2, 255, 58, 0.5)" onClick={toggleModal}>
        <IconPlus />
      </ListButton>

      <Modal width="400px" height="320px" statusModal={modalStatus} toggleModal={toggleModal}>
        <AddUserModal toggleModal={toggleModal} />
      </Modal>
    </>
  );
};
