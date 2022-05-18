import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IUser, IUserWithCheck } from './interfaces';
import { UsersPage } from './UsersPage';

export const UsersPageContainer: React.FC = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const [usersWithCheck, setUsersWithCheck] = useState([] as IUserWithCheck[]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users?_limit=10'
      );
      setUsers(data);
      getUsersWithCheck(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getUsersWithCheck = (data: IUser[]) => {
    const newUsersWithCheck = data.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });
    setUsersWithCheck(newUsersWithCheck);
  };

  const deleteUser = () => {
    setUsersWithCheck([...usersWithCheck.filter((user) => !user.checked)]);
  };

  const toggleChecked = (id: number) => {
    setUsersWithCheck([
      ...usersWithCheck.map((user) => {
        return user.id === id
          ? { ...user, checked: !user.checked }
          : { ...user };
      }),
    ]);
  };
  return (
    <UsersPage
      users={usersWithCheck}
      handleDelete={deleteUser}
      toggleChecked={toggleChecked}
    />
  );
};
