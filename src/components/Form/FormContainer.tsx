import React, { useState } from "react";
import axios from "axios";

import { Form } from "./Form";
import { IUser } from "../../models/IUser";
import { useInput } from "../../hooks/useInput";

export const FormContainer = () => {
  const username = useInput("");
  const password = useInput("");

  const [output, setOutput] = useState({} as IUser);

  const onSubmit = async () => {
    try {
      const response = await axios.post<IUser>("http://localhost:4000/api", {
        username: username.value,
        password: password.value,
      });
      setOutput(response.data);
      username.setValue("");
      password.setValue("");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <Form
      username={username.value}
      password={password.value}
      handleUsername={username.handleValue}
      handlePassword={password.handleValue}
      output={output}
      onSubmit={onSubmit}
    />
  );
};
