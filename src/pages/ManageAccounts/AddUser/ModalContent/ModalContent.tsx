import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './ModalContent.module.scss';

export const ModalContent = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h2">Add account</Typography>
      <Box display="flex" flexDirection="column" alignItems="center"></Box>
    </div>
  );
};
