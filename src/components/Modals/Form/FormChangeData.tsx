import React from 'react';
import { Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { SubmitButton } from '@/components/UIkit/Button/SubmitButton/SubmitButton';
import { FormInput } from '@/components/UIkit/Input/FormInput';
import { IUserInfoList } from '@/types/userList';
import { useTypedDispatch } from '@/hook/useAppDispatch';
import { changeUserData } from '@/store/actions/changeUserData';
import { useFormatDataObj } from '@/hook/useFormatData';
import * as Yup from 'yup';

interface IProps {
  data: IUserInfoList;
  toggleModal(): void;
}

type IFormValues = Partial<Omit<IUserInfoList, 'id'>>;

const formSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  name: Yup.string().max(15, 'Maximum 15 characters'),
  token: Yup.string().required('Enter token'),
  email: Yup.string().email('Enter email correctly'),
});

export const FormChangeData: React.FC<IProps> = ({ data: { id, ...initialValues }, toggleModal }) => {
  const dispatch = useTypedDispatch();
  const formatDataObj = useFormatDataObj();

  const onSubmit = (data: Omit<IUserInfoList, 'id'>) => {
    const formattedData = formatDataObj(data, '', '-');

    dispatch(changeUserData({ id, ...formattedData }));
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
            <Field name="email" placeholder="email" component={FormInput} />
          </Box>

          <Box mt={3}>
            <SubmitButton>SUBMIT</SubmitButton>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};
