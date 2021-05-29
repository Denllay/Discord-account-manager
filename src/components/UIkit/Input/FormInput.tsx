import React from 'react';
import { Box, TextField, Typography, withStyles } from '@material-ui/core';
import { FieldProps } from 'formik';

interface IProps extends FieldProps {
  type?: string;
}

export const FormInput: React.FC<IProps> = ({ type = 'text', field, form: { touched, errors }, ...props }) => {
  const fieldErrors = errors[field.name];

  return (
    <Box display="flex" flexDirection="column">
      <TextField type={type} {...field} {...props} autoComplete="off" variant="outlined" size="small" />

      {touched[field.name] && fieldErrors ? (
        <Typography color="error" variant="subtitle1">
          {fieldErrors}
        </Typography>
      ) : null}
    </Box>
  );
};
