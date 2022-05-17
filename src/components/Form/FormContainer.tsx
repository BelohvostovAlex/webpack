import React, { useState, useContext } from 'react';
import axios from 'axios';

import { Form } from './Form';
import { IUser } from '../../models/IUser';
import { useInput } from '../../hooks/useInput';
import { AppContext } from '../../context';

export const FormContainer: React.FC = () => {
  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  const [output, setOutput] = useState({} as IUser);

  const { changeSetIsAuth } = useContext(AppContext);

  const onSubmit = async () => {
    try {
      const response = await axios.post<IUser>('http://localhost:4000/api', {
        username: username,
        password: password,
      });
      setOutput(response.data);
      setTimeout(() => {
        changeSetIsAuth(true);
      }, 500);
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
