import React from 'react';
import { Tooltip, Button as MuiButton, TooltipProps } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

interface IProps extends TooltipProps {
  onClick(): void;
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button = withStyles({
  root: {
    '&.Mui-disabled': {
      pointerEvents: 'auto',
      cursor: 'not-allowed',
    },
  },
})(MuiButton);

export const ToolTipButton: React.FC<IProps> = ({ onClick, disabled, children, variant = 'text', ...props }) => {
  return (
    <Tooltip {...props}>
      <Button onClick={onClick} disabled={disabled} variant={variant}>
        {children}
      </Button>
    </Tooltip>
  );
};
