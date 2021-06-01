import React from 'react';
import { Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton/SubmitButton';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import { IUserMoreData } from '@/types/userList';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { changeUserData } from '@/store/actions/changeUserData';
import * as Yup from 'yup';

interface IProps {
  data: IUserMoreData;
  toggleModal(): void;
}

type IFormValues = Partial<Omit<IUserMoreData, 'id'>>;

const formSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  name: Yup.string().max(15, 'Allo! Maximum 15 characters'),

  token: Yup.string().when(['password', 'email'], {
    is: (password: string, email: string) => password && email,
    then: Yup.string(),
    otherwise: Yup.string().required('Email and Password or Token'),
  }),

  password: Yup.string(),
  email: Yup.string(),
});

export const FormChangeData: React.FC<IProps> = ({ data: { id, ...initialValues }, toggleModal }) => {
  const dispatch = useTypedDispatch();

  const onSubmit = ({ name, ...data }: Omit<IUserMoreData, 'id'>) => {
    const formatName = name || '-';

    dispatch(changeUserData({ name: formatName, id, ...data }));
    toggleModal();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formSchema}>
      <Form>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Field name="name" placeholder="name" component={FormInput} />

          <Box mt={1}>
            <Field name="token" placeholder="token" component={FormInput} />
          </Box>

          <Box mt={1}>
            <Field name="email" placeholder="email" type="email" component={FormInput} />
          </Box>

          <Box mt={1}>
            <Field name="password" placeholder="password" component={FormInput} />
          </Box>

          <Box mt={3}>
            <SubmitButton>SUBMIT</SubmitButton>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};
