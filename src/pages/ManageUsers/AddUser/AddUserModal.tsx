import React from 'react';
import { BasicForm } from '@/components/Modals/Form/BasicForm';
import { AddUser } from '@/components/AddUser/AddUser';
import { ChoiceForm } from '@/components/Modals/Form/ChoiceForm';
import { TokenForm } from '@/components/Modals/Form/TokenForm';
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
          <BasicForm toggleModal={toggleModal} />
        </AddUser>
      );
    }

    if (formStatus === 'TOKEN') {
      return (
        <AddUser setFormStatus={setFormStatus}>
          <TokenForm toggleModal={toggleModal} />
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
