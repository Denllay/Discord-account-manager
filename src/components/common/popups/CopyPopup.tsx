import React, { useEffect, useState } from 'react';
import { AlertPopup } from './AlertPopup';
import { TCopyAlertMode } from '@/types/copyPopup';

interface IProps {
  copyStatus: boolean;
  copyData: string;
  onClose(): void;
}

export const CopyPopup: React.FC<IProps> = ({ copyData, copyStatus, onClose }) => {
  useEffect(() => {
    if (copyStatus) {
      navigator.clipboard.writeText(copyData);
    }
  }, [copyData, copyStatus]);

  return (
    <AlertPopup onClose={onClose} onOpen={copyStatus} severity="success">
      Sucsess copy!
    </AlertPopup>
  );
};
