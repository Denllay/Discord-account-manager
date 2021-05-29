import React, { useState } from 'react';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { ListButton } from '@/components/UIkit/Button/ListButton/ListButton';
import { ModalContent } from './ModalContent/ModalContent';
import IconPlus from '@/assets/svg/iconPlus.svg';
import styles from './AddUser.module.scss';

export const AddUser = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const toggleUserModal = () => {
    setModalStatus((prev) => !prev);
  };
  return (
    <>
      <ListButton background="rgba(2, 255, 58, 0.5)" onClick={toggleUserModal}>
        <IconPlus />
      </ListButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={modalStatus}
        onClose={toggleUserModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalStatus}>
          <ModalContent toggleModal={toggleUserModal} />
        </Fade>
      </Modal>
    </>
  );
};
