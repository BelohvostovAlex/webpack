import React from "react";

export enum ButtonTypes {
  submit = "submit",
  button = "button",
  reset = "reset",
}

export interface ButtonContainerProps {
  btnText: string;
  btnType: ButtonTypes | undefined;
  btnClass: string;
  onSub: () => void;
}

export interface ButtonProps {
  btnText: string;
  btnType: ButtonTypes | undefined;
  btnClass: string;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
