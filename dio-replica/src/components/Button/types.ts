import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'primary' | 'secondary' | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  as?: React.ElementType;
  to?: string;
}

// styles props (styled-components)
export interface IButtonStyles {
  variant?: 'primary' | 'secondary' | string;
}
