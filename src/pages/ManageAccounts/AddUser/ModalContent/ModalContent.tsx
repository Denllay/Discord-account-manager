import React from 'react';
import { BasicForm } from './Forms/BasicForm';
import { ChoiceForm } from './Forms/ChoiceForm';
import { TokenForm } from './Forms/TokenForm';
import { useState } from 'react';
import { TFormStatus } from '@/types/addAccount';
import styles from './ModalContent.module.scss';

interface IProps {
  toggleModal(): void;
}

export const ModalContent: React.FC<IProps> = ({ toggleModal }) => {
  const [formStatus, setFormStatus] = useState<TFormStatus>('CHOICE');

  const renderForm = () => {
    if (formStatus === 'BASIC') {
      return <BasicForm toggleModal={toggleModal} />;
    }
    if (formStatus === 'TOKEN') {
      return <TokenForm setFormStatus={setFormStatus} toggleModal={toggleModal} />;
    }
    if (formStatus === 'CHOICE') {
      return <ChoiceForm setFormStatus={setFormStatus} />;
    }
    return null;
  };

  return <div className={styles.wrapper}>{renderForm()}</div>;
};
