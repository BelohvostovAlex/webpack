import React from "react";

import { Button } from "./Button";
import { ButtonContainerProps } from "./interfaces";

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  btnClass,
  btnType,
  onSub,
  btnText,
}) => {
  const onSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSub();
  };
  return (
    <Button
      btnClass={btnClass}
      btnType={btnType}
      onSubmit={onSubmitForm}
      btnText={btnText}
    />
  );
};
