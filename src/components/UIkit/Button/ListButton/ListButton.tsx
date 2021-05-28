import React from 'react';
import styles from './ListButton.module.scss';

interface IProps {
  onClick(): void;
  size?: ISize;
  background: string;
}

interface ISize {
  width: string;
  height: string;
}

export const ListButton: React.FC<IProps> = ({ onClick, size, background, children }) => {
  return (
    <div className={styles.button} onClick={onClick} style={{ ...size, background }}>
      {children}
    </div>
  );
};
