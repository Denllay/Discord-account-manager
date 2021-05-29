import React, { Dispatch, SetStateAction } from 'react';
import { AddUser } from '@/components/AddUser/AddUser';
import { Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton/SubmitButton';
import { TFormStatus } from '@/types/addUser';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import * as Yup from 'yup';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { addUser } from '@/store/actions/addUser';

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
  token: Yup.string().required('Write your token, bitch'),
  name: Yup.string().max(15, 'Allo! Maximum 15 characters'),
});

export const TokenForm: React.FC<IProps> = ({ toggleModal, setFormStatus }) => {
  const dispatch = useTypedDispatch();

  const onSubmit = ({ token, name = '-' }: IFormValues) => {
    dispatch(addUser({ token, name, password: '-', email: '-' }));
    toggleModal();
  };

  return (
    <AddUser setFormStatus={setFormStatus}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formTokenSchema}>
        <Form>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Field name="token" placeholder="token*" component={FormInput} />

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
