import React, { ReactElement } from 'react';
import { Modal as ModalUI, Fade, Backdrop, makeStyles, Theme, Box } from '@material-ui/core';

interface IProps {
  open: boolean;
  width: string | number;
  height: string | number;
  onClose(): void;
}

const useStyles = makeStyles(({ palette }: Theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal_content: {
    background: palette.info.main,
    borderRadius: 2,
    paddingTop: 22,
    outline: 0,
    position: 'relative',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
}));

export const Modal: React.FC<IProps> = ({ open, onClose, width, height, children }) => {
  const classes = useStyles();

  return (
    <ModalUI
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box height={height} width={width} className={classes.modal_content}>
          {children as ReactElement}
        </Box>
      </Fade>
    </ModalUI>
  );
};
