import React from 'react';

export enum ButtonTypes {
  submit = 'submit',
  button = 'button',
  reset = 'reset',
}

export interface ButtonProps {
  btnText: string;
  btnType: ButtonTypes | undefined;
  btnClass: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
