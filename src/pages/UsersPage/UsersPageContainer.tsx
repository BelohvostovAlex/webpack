import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IUser } from './interfaces';
import { UsersPage } from './UsersPage';

export const UsersPageContainer: React.FC = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const [usersSet, setUsersSet] = useState(new Set());

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users?_limit=10'
      );
      setUsers(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getIsChecked = (id: number) => {
    if (usersSet.has(id)) {
      return true;
    } else {
      return false;
    }
  };

  const deleteUser = () => {
    setUsers([...users.filter((user) => !getIsChecked(user.id))]);
  };

  const toggleChecked = (id: number) => {
    if (usersSet.has(id)) {
      const arr = Array.from(usersSet).filter((item) => item !== id);
      setUsersSet(new Set(arr));
    } else {
      setUsersSet((prevSet) => prevSet.add(id));
    }
  };
  return (
    <UsersPage
      users={users}
      handleDelete={deleteUser}
      toggleChecked={toggleChecked}
    />
  );
};
