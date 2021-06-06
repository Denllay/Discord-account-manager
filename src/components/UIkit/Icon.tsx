import React, { cloneElement, isValidElement } from 'react';
import { useTypedSelector } from '@/hook/useTypedSelector';

interface IProps {
  reverse?: boolean;
}

const iconStyle = {
  cursor: 'pointer',
};

export const Icon: React.FC<IProps> = ({ children, reverse = false }) => {
  const { isDarkMode } = useTypedSelector((state) => state.user);

  const getColorToUse = () => {
    if (reverse) {
      return !isDarkMode ? '#ffffff' : '#000000';
    }

    return isDarkMode ? '#ffffff' : '#000000';
  };

  if (isValidElement(children)) {
    return cloneElement(children, {
      fill: getColorToUse(),
      style: iconStyle,
    });
  }

  return null;
};
