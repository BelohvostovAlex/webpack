import React from 'react';
import { IUser } from '../../models/IUser';

export interface FormProps {
  username: string;
  password: string;
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  output: IUser;
  onSubmit: () => void;
}
