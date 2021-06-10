import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { SubmitButton } from '@/components/Button/SubmitButton';
import { FormInput } from '@/components/Form/FormInput';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { addUser } from '@/store/actions/addUser';
import { checkTokenInList } from '@/store/actions/checkTokenInList';
import { useGetDataByToken } from '@/hook/useGetDataByToken';
import { LoaderProgress } from '../LoaderProgress/LoaderProgress';
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
  token: Yup.string().required('Enter token'),
  name: Yup.string().max(15, 'Maximum 15 characters'),
});

export const FormAddUser: React.FC<IProps> = ({ toggleModal, initialValues = defaultValues }) => {
  const dispatch = useTypedDispatch();
  const { isLoading, errorStatus, getDataByToken } = useGetDataByToken();

  const onSubmit = async ({ token, name }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
    const userData = await getDataByToken(token);
    const formattedName = name || '-';

    if (!!userData) {
      const { email, avatar, username } = userData!;

      dispatch(addUser({ token, email, avatar, username, name: formattedName }));
      dispatch(checkTokenInList(token));

      toggleModal();
      setSubmitting(false);
    }
  };

  return (
    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-around">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box mb={3}>
          <Typography variant="h1">Add account</Typography>
        </Box>

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
      </Box>

      <LoaderProgress isLoading={isLoading} errorStatus={errorStatus}>
        Invalid token
      </LoaderProgress>
    </Box>
  );
};
