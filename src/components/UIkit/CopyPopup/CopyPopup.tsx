import React, { useEffect, useState } from 'react';
import { AlertPopup } from '../AlertPopup/AlertPopup';
import { TCopyAlertMode } from '@/types/copyPopup';

interface IProps {
  copyStatus: boolean;
  copyData: string;
  onClose(): void;
}

export const CopyPopup: React.FC<IProps> = ({ copyData, copyStatus, onClose }) => {
  const [alertMode, setAlertMode] = useState<TCopyAlertMode | null>(null);
  const copyTitleByMode = alertMode === 'success' ? 'Sucsess copy!' : 'Empty field!';

  useEffect(() => {
    if (copyData !== '-' && copyStatus) {
      navigator.clipboard.writeText(copyData);
      setAlertMode('success');
    } else {
      setAlertMode('error');
    }
  }, [copyData, copyStatus]);

  return (
    alertMode && (
      <AlertPopup onClose={onClose} alertStatus={copyStatus} severity={alertMode!}>
        {copyTitleByMode}
      </AlertPopup>
    )
  );
};
