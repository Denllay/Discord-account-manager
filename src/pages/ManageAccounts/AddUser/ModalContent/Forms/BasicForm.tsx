import React from 'react';

interface IProps {
  toggleModal(): void;
}

export const BasicForm: React.FC<IProps> = ({ toggleModal }) => {
  return <div>BasicForm</div>;
};
