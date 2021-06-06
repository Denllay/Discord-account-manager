import React from 'react';
import { ListButton } from './ListButton';
import { useTypedSelector } from '@/hook/useTypedSelector';

interface IProps {
  onClick(): void;
}

export const ButtonInfoMore: React.FC<IProps> = ({ onClick, children }) => {
  const { isDarkMode } = useTypedSelector((state) => state.user);
  const bgColorToUse = isDarkMode ? '#FFC700' : '#FFC700F7';

  return (
    <ListButton onClick={onClick} bgcolor={bgColorToUse}>
      {children}
    </ListButton>
  );
};
