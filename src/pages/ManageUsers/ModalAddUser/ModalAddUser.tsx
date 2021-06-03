import React from 'react';
import { BoxAddUser } from '@/components/Modals/Form/UserAdd/BoxAddUser';
import { ChoiceForm } from '@/components/Modals/Form/UserAdd/ChoiceForm';
import { FormByData } from '@/components/Modals/Form/UserAdd/FormByData';
import { FormByToken } from '@/components/Modals/Form/UserAdd/FormByToken';
import { useState } from 'react';
import { TFormStatus } from '@/types/addUser';

interface IProps {
  toggleModal(): void;
}

export const ModalAddUser: React.FC<IProps> = ({ toggleModal }) => {
  const [formStatus, setFormStatus] = useState<TFormStatus>('CHOICE');

  const renderForm = () => {
    if (formStatus === 'BASIC') {
      return (
        <BoxAddUser setFormStatus={setFormStatus}>
          <FormByData toggleModal={toggleModal} />
        </BoxAddUser>
      );
    }

    if (formStatus === 'TOKEN') {
      return (
        <BoxAddUser setFormStatus={setFormStatus}>
          <FormByToken toggleModal={toggleModal} />
        </BoxAddUser>
      );
    }

    if (formStatus === 'CHOICE') {
      return <ChoiceForm setFormStatus={setFormStatus} />;
    }
    return null;
  };

  return renderForm();
};
