import React, { useState, useContext } from 'react';
import axios from 'axios';

import { Form } from './Form';
import { IUser } from '../../models/IUser';
import { useInput } from '../../hooks/useInput';

export const FormContainer: React.FC = () => {
  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  const [output, setOutput] = useState({} as IUser);

  const onSubmit = async () => {
    try {
      const response = await axios.post<IUser>('http://localhost:4000/api', {
        username: username,
        password: password,
      });
      setOutput(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <Form
      username={username}
      password={password}
      handleUsername={setUsername}
      handlePassword={setPassword}
      output={output}
      onSubmit={onSubmit}
    />
  );
};
