import React from 'react';
import { Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton/SubmitButton';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import * as Yup from 'yup';

interface IProps {
  toggleModal(): void;
}
interface IFormValues {
  password: string;
  email: string;
  name?: string;
}

const initialValues: IFormValues = {
  password: '',
  email: '',
  name: '',
};

const formSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  password: Yup.string().trim('Password cannot have spaces').required('Write your password, bitch'),
  email: Yup.string().trim('Email cannot have spaces').required('Write your email, bitch'),
  name: Yup.string().max(15, 'Allo! Maximum 15 characters'),
});

export const FormByData: React.FC<IProps> = ({ toggleModal }) => {
  const onSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formSchema}>
      <Form>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Field name="password" placeholder="password*" component={FormInput} />

          <Box mt={1}>
            <Field name="email" placeholder="email*" component={FormInput} />
          </Box>

          <Box mt={1}>
            <Field name="name" placeholder="name" component={FormInput} />
          </Box>

          <Box mt={3}>
            <SubmitButton>SUBMIT</SubmitButton>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};
