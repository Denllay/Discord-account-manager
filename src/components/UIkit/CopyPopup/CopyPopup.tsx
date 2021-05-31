import React, { useEffect, useState } from 'react';
import { AlertPopup } from '../AlertPopup/AlertPopup';
import { TCopyAlertMode } from '@/types/copyPopup';

interface IProps {
  copyStatus: boolean;
  onClose(): void;
  copyData: string;
}

export const CopyPopup: React.FC<IProps> = ({ copyData, copyStatus, onClose }) => {
  const [alertMode, setAlertMode] = useState<TCopyAlertMode | null>(null);
  const copyTitleByMode = alertMode === 'success' ? 'Sucsess copy!' : 'Empty field!';

  useEffect(() => {
    if (copyData === '-') {
      setAlertMode('error');
    } else {
      navigator.clipboard.writeText(copyData);
      setAlertMode('success');
    }
  }, [copyData]);

  return (
    alertMode && (
      <AlertPopup onClose={onClose} alertStatus={copyStatus} severity={alertMode!}>
        {copyTitleByMode}
      </AlertPopup>
    )
  );
};
