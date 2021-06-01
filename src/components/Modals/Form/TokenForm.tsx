import React from 'react';
import { Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton/SubmitButton';
import { TFormStatus } from '@/types/addUser';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { addUser } from '@/store/actions/addUser';
import * as Yup from 'yup';
import { checkTokenInList } from '@/store/actions/checkTokenInList';

interface IProps {
  toggleModal(): void;
  initialValues?: IFormValues;
}

interface IFormValues {
  token: string;
  name?: string;
}

const defaultValues: IFormValues = {
  token: '',
  name: '',
};

const formTokenSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  token: Yup.string().required('Write your token, bitch'),
  name: Yup.string().max(15, 'Allo! Maximum 15 characters'),
});

export const TokenForm: React.FC<IProps> = ({ toggleModal, initialValues = defaultValues }) => {
  const dispatch = useTypedDispatch();

  const onSubmit = ({ token, name }: IFormValues) => {
    const formatName = name || '-';

    dispatch(addUser({ token, name: formatName, password: '-', email: '-' }));
    dispatch(checkTokenInList(token));
    toggleModal();
  };

  return (
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
  );
};
