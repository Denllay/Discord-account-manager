import React, { useMemo } from 'react';
import { Alert } from '@material-ui/lab';
import { makeStyles, Snackbar } from '@material-ui/core';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  onOpen: boolean;
  severity: 'success' | 'info' | 'error';
  onClose(): void;
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: spacing(2),
    },
  },
}));

const closePopupDuration = 3000;

export const AlertPopup: React.FC<IProps> = ({ children, onOpen, severity, onClose }) => {
  const parentDiv = useRef(null);
  const classes = useStyles();
  const el = useMemo(() => document.createElement('div'), []);

  const closePopup = () => {
    onClose();
    removeParendDiv();
  };

  const removeParendDiv = () => {
    const modalDiv = el.parentNode;
    if (!onOpen && modalDiv) modalDiv.removeChild(el);
  };

  useEffect(() => {
    if (onOpen) {
      document.body.appendChild(el);
    }

    setTimeout(() => {
      closePopup();
    }, closePopupDuration);
  }, [onOpen, el]);

  const ModalComponent = createPortal(
    <div className={classes.root} ref={parentDiv}>
      <Snackbar open={onOpen} autoHideDuration={closePopupDuration} onClose={closePopup}>
        <Alert onClose={closePopup} severity={severity}>
          {children}
        </Alert>
      </Snackbar>
    </div>,
    el
  );

  return ModalComponent;
};
