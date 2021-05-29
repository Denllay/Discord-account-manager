import React, { Dispatch, SetStateAction } from 'react';
import { AddUser } from '@/components/AddUser/AddUser';
import { Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton/SubmitButton';
import { TFormStatus } from '@/types/addUser';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import * as Yup from 'yup';

interface IProps {
  setFormStatus: Dispatch<SetStateAction<TFormStatus>>;
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

const formTokenSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  password: Yup.string().required('Write your password, bitch'),
  email: Yup.string().required('Write your email, bitch'),
  name: Yup.string().max(15, 'Allo! Maximum 15 characters'),
});

export const BasicForm: React.FC<IProps> = ({ toggleModal, setFormStatus }) => {
  const onSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <AddUser setFormStatus={setFormStatus}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formTokenSchema}>
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
    </AddUser>
  );
};
