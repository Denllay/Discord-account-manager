import React from 'react';
import { AddUser } from '@/components/AddUser/AddUser';
import { ChoiceForm } from '@/components/Modals/Form/AddUser/ChoiceForm';
import { FormByData } from '@/components/Modals/Form/AddUser/FormByData';
import { FormByToken } from '@/components/Modals/Form/AddUser/FormByToken';
import { useState } from 'react';
import { TFormStatus } from '@/types/addUser';

interface IProps {
  toggleModal(): void;
}

export const AddUserModal: React.FC<IProps> = ({ toggleModal }) => {
  const [formStatus, setFormStatus] = useState<TFormStatus>('CHOICE');

  const renderForm = () => {
    if (formStatus === 'BASIC') {
      return (
        <AddUser setFormStatus={setFormStatus}>
          <FormByData toggleModal={toggleModal} />
        </AddUser>
      );
    }

    if (formStatus === 'TOKEN') {
      return (
        <AddUser setFormStatus={setFormStatus}>
          <FormByToken toggleModal={toggleModal} />
        </AddUser>
      );
    }

    if (formStatus === 'CHOICE') {
      return <ChoiceForm setFormStatus={setFormStatus} />;
    }
    return null;
  };

  return renderForm();
};
