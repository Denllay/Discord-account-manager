import React from 'react';
import { Box } from '@material-ui/core';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import { IUserInfoList } from '@/types/userList';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { changeUserData } from '@/store/actions/changeUserData';
import { useGetDataByToken } from '@/hook/useGetDataByToken';
import { LoaderProgress } from '@/components/LoaderProgress/LoaderProgress';
import * as Yup from 'yup';

interface IProps {
  data: IUserInfoList;
  toggleModal(): void;
}
interface ISetNewData {
  token: string;
  name: string;
  setSubmitting: (isSubmitting: boolean) => void;
}

type IFormValues = Omit<IUserInfoList, 'id' | 'avatar' | 'email'>;

const formSchema: Yup.SchemaOf<Partial<IFormValues>> = Yup.object().shape({
  name: Yup.string().max(15, 'Maximum 15 characters'),
  token: Yup.string().required('Enter token'),
  email: Yup.string().email('Enter email correctly'),
});

export const FormChangeData: React.FC<IProps> = ({ data: { id, avatar, email, ...initialValues }, toggleModal }) => {
  const dispatch = useTypedDispatch();
  const { isLoading, errorStatus, getDataByToken } = useGetDataByToken();

  const onSubmit = async ({ token, name }: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
    const formattedName = name || '-';

    if (token === initialValues.token) {
      setNewName({ token, name: formattedName, setSubmitting });
    } else {
      setNewToken({ token, name: formattedName, setSubmitting });
    }
  };

  const setNewName = ({ setSubmitting, ...userData }: ISetNewData) => {
    dispatch(changeUserData({ id, avatar, email, ...userData }));

    toggleModal();
    setSubmitting(false);
  };

  const setNewToken = async ({ token, name, setSubmitting }: ISetNewData) => {
    const userData = await getDataByToken(token);

    if (!!userData) {
      const { email, avatar, id } = userData!;

      dispatch(changeUserData({ id, avatar, token, email, name }));

      toggleModal();
      setSubmitting(false);
    }
  };

  return (
    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-around">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formSchema}>
        <Form>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Field name="name" placeholder="name" component={FormInput} />

            <Box mt={1}>
              <Field name="token" placeholder="token" component={FormInput} />
            </Box>

            <Box mt={3}>
              <SubmitButton>SUBMIT</SubmitButton>
            </Box>
          </Box>
        </Form>
      </Formik>

      <LoaderProgress isLoading={isLoading} errorStatus={errorStatus}>
        Invalid token
      </LoaderProgress>
    </Box>
  );
};
