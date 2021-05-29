import React, { Dispatch, SetStateAction } from 'react';
import { AddAccount } from '@/components/AddAccount/AddAccount';
import { Box, Button } from '@material-ui/core';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { TFormStatus } from '@/types/addAccount';

interface IProps {
  setFormStatus: Dispatch<SetStateAction<TFormStatus>>;
  toggleModal(): void;
}

interface IFormValues {
  token: string;
  name?: string;
}

const initialValues: IFormValues = {
  token: '',
  name: '',
};

const formTokenSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  token: Yup.string().required(),
  name: Yup.string().max(15, 'Allo! Maximum 15 characters'),
});

export const TokenForm: React.FC<IProps> = ({ toggleModal, setFormStatus }) => {
  const onSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <AddAccount setFormStatus={setFormStatus}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formTokenSchema}>
        <Form>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Field name="token" placeHolder="token" />

            <Field name="name" placeHolder="name" />

            <Button type="submit">SUBMIT</Button>
          </Box>
        </Form>
      </Formik>
    </AddAccount>
  );
};
