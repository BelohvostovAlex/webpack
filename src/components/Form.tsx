import React from "react";
import { Button } from "./Button";
import { IUser } from "../models/IUser";
import { ButtonTypes } from "./Button";

import axios from "axios";

export const Form: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");

  const [output, setOutput] = React.useState({} as IUser);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post<IUser>("http://localhost:4000/api", {
        username,
        password: pass,
      });
      setOutput(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

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
        value={pass}
        onChange={handlePass}
      />
      <Button
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
