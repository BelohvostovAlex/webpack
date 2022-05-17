import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { IUser } from './interfaces';
import { UsersPage } from './UsersPage';
import { AppContext } from '../../context';

export const UsersPageContainer: React.FC = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const { changeSetIsAuth } = useContext(AppContext);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users?_limit=10'
      );
      setUsers(
        data.map((item) => {
          return {
            ...item,
            checked: false,
          };
        })
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteUser = (checked: boolean, id: number) => {
    const currUser = users.find((user) => user.id === id);
    if (checked) {
      setUsers([...users.filter((user) => user.id !== currUser.id)]);
    }
  };
  const toggleChecked = (id: number) => {
    setUsers([
      ...users.map((user) => {
        return user.id === id
          ? { ...user, checked: !user.checked }
          : { ...user };
      }),
    ]);
  };
  return (
    <UsersPage
      users={users}
      handleDelete={deleteUser}
      toggleChecked={toggleChecked}
      changeSetIsAuth={changeSetIsAuth}
    />
  );
};
