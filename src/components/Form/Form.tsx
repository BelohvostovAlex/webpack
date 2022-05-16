import React from "react";

import { ButtonContainer } from "../Button";
import { ButtonTypes } from "../Button/interfaces";
import { FormProps } from "./interfaces";

import "./form.scss";

export const Form: React.FC<FormProps> = ({
  username,
  password,
  handleUsername,
  handlePassword,
  onSubmit,
  output,
}) => {
  return (
    <form className="form">
      <h2 className="title">Registration</h2>
      <label htmlFor="usernameInput">Username</label>
      <input
        type="text"
        id="usernameInput"
        value={username}
        onChange={handleUsername}
      />
      <label htmlFor="passwordInput">Password</label>
      <input
        type="password"
        name="password"
        id="passwordInput"
        value={password}
        onChange={handlePassword}
      />
      <ButtonContainer
        btnText="send"
        btnType={ButtonTypes.submit}
        btnClass="submitBtn"
        onSub={onSubmit}
      />
      {output && (
        <div className="output">
          <h2>{output.username}</h2>
          <h2>{output.password}</h2>
        </div>
      )}
    </form>
  );
};
