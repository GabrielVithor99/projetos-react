import React from 'react';
import { Control } from 'react-hook-form';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  control: Control<any>;
  name: string;
  errorMessage?: string;
}

// no additional style props
