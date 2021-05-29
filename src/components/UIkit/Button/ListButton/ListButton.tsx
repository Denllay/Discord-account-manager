import React from 'react';
import styles from './ListButton.module.scss';

interface IProps {
  onClick(): void;
  size?: ISize;
  bgcolor: string;
}

interface ISize {
  width: string;
  height: string;
}

export const ListButton: React.FC<IProps> = ({ onClick, size, bgcolor, children }) => {
  return (
    <div className={styles.button} onClick={onClick} style={{ ...size, background: bgcolor }}>
      {children}
    </div>
  );
};
