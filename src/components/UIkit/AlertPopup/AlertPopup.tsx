import React, { useMemo } from 'react';
import { Alert } from '@material-ui/lab';
import { makeStyles, Snackbar } from '@material-ui/core';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  alertStatus: boolean;
  severity: 'success' | 'info' | 'error';
  onClose(): void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const closePopupDuration = 3000;

export const AlertPopup: React.FC<IProps> = ({ children, alertStatus, severity, onClose }) => {
  const parentDiv = useRef(null);
  const classes = useStyles();
  const el = useMemo(() => document.createElement('div'), []);

  const closePopup = () => {
    onClose();
    removeParendDiv();
  };

  const removeParendDiv = () => {
    const modalDiv = el.parentNode;
    if (!alertStatus && modalDiv) modalDiv.removeChild(el);
  };

  useEffect(() => {
    if (alertStatus) {
      document.body.appendChild(el);
    }

    setTimeout(() => {
      closePopup();
    }, closePopupDuration);
  }, [alertStatus, el]);

  const ModalComponent = createPortal(
    <div className={classes.root} ref={parentDiv}>
      <Snackbar open={alertStatus} autoHideDuration={closePopupDuration} onClose={closePopup}>
        <Alert onClose={closePopup} severity={severity}>
          {children}
        </Alert>
      </Snackbar>
    </div>,
    el
  );

  return ModalComponent;
};
