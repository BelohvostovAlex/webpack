import React from "react";

export enum ButtonTypes {
  submit = "submit",
  button = "button",
  reset = "reset",
}

interface ButtonProps {
  btnText: string;
  btnType: ButtonTypes;
  btnClass: string;
  onSub: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  btnText,
  btnType,
  btnClass,
  onSub,
}) => {
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSub();
  };
  return (
    <button className={btnClass} type={btnType} onClick={onSubmit}>
      {btnText}
    </button>
  );
};
