import React, { useState } from 'react';
import { ListButton } from '@/components/Button/ListButton';
import { Box, Typography } from '@material-ui/core';
import { Modal } from '@/components/common/Modal';
import { FormAddUser } from '@/components/Form/FormAddUser';
import { Icon } from '@/components/common/Icon';
import IconPlus from '@/assets/svg/iconPlus.svg';

export const TopBlock = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const toggleModal = () => {
    setModalStatus((prev) => !prev);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h1">Accounts list</Typography>

        <ListButton onClick={toggleModal} bgcolor="rgba(2, 255, 58, 0.5)">
          <Icon>
            <IconPlus />
          </Icon>
        </ListButton>
      </Box>

      <Modal width="400px" height="320px" open={modalStatus} onClose={toggleModal}>
        <FormAddUser toggleModal={toggleModal} />
      </Modal>
    </>
  );
};
