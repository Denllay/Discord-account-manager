import React, { ReactElement } from 'react';
import { Modal as ModalUI, Fade, Backdrop } from '@material-ui/core';
import styles from './Modal.module.scss';

interface IProps {
  onOpen: boolean;
  toggleModal(): void;
  width: string | number;
  height: string | number;
}

export const Modal: React.FC<IProps> = ({ onOpen, toggleModal, width, height, children }) => {
  return (
    <ModalUI
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.modal}
      open={onOpen}
      onClose={toggleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={onOpen}>
        <div style={{ width, height }} className={styles.modal_content}>
          {children as ReactElement}
        </div>
      </Fade>
    </ModalUI>
  );
};
