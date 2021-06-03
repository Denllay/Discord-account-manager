import React, { useState } from 'react';
import { Box, Typography, CircularProgress } from '@material-ui/core';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton/SubmitButton';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { addUser } from '@/store/actions/addUser';
import { checkTokenInList } from '@/store/actions/checkTokenInList';
import { useGetDataByToken } from '@/hook/useGetDataByToken';
import * as Yup from 'yup';

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

const formSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  token: Yup.string().required('Write your token, bitch'),
  name: Yup.string().max(15, 'Maximum 15 characters'),
});

export const FormByToken: React.FC<IProps> = ({ toggleModal, initialValues = defaultValues }) => {
  const dispatch = useTypedDispatch();
  const [error, setError] = useState('');
  const { isLoading, getDataByToken: checkValidToken } = useGetDataByToken();

  const onSubmit = async ({ token, name }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
    const isValid = await checkValidToken(token);
    const formatName = name || '-';

    if (!!isValid) {
      dispatch(addUser({ token, name: formatName, password: '-', email: '-' }));
      dispatch(checkTokenInList(token));

      toggleModal();
    } else {
      setError('Invalid token');
    }

    setSubmitting(false);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formSchema}>
        <Form>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Field name="token" placeholder="token*" component={FormInput} />

            <Box mt={1}>
              <Field name="name" placeholder="name" component={FormInput} />
            </Box>

            <Box mt={3}>
              <SubmitButton disabled={isLoading}>SUBMIT</SubmitButton>
            </Box>
          </Box>
        </Form>
      </Formik>

      <Box display="flex" justifyContent="center">
        {!isLoading && (
          <Typography variant="subtitle1" color="error">
            {error}
          </Typography>
        )}

        {isLoading && <CircularProgress />}
      </Box>
    </>
  );
};
