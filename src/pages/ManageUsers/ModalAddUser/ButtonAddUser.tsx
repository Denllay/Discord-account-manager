import React, { useState } from 'react';
import { ListButton } from '@/components/UIkit/Button/ListButton/ListButton';
import { Modal } from '@/components/UIkit/Modal/Modal';
import { FormAddUser } from '@/components/Modals/Form/UserAdd/FormAddUser';
import IconPlus from '@/assets/svg/iconPlus.svg';

export const ButtonAddUser = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const toggleModal = () => {
    setModalStatus((prev) => !prev);
  };
  return (
    <>
      <ListButton bgcolor="rgba(2, 255, 58, 0.5)" onClick={toggleModal}>
        <IconPlus />
      </ListButton>

      <Modal width="400px" height="320px" onOpen={modalStatus} toggleModal={toggleModal}>
        <FormAddUser toggleModal={toggleModal} />
      </Modal>
    </>
  );
};
