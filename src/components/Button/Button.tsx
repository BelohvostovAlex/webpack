import React from 'react';

import { ButtonProps } from './interfaces';

import './formButton.scss';

export const Button: React.FC<ButtonProps> = ({
  btnText,
  btnType,
  btnClass,
  onClick,
}) => {
  return (
    <button className={btnClass} type={btnType} onClick={onClick}>
      {btnText}
    </button>
  );
};
