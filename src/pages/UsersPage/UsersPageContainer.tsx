import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IUser } from './interfaces';
import { UsersPage } from './UsersPage';

export const UsersPageContainer: React.FC = () => {
  const [users, setUsers] = useState([] as IUser[]);
  const [checkedUserIDs, setCheckedUserIDs] = useState(new Set());

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

  const getIsChecked = (id: number) => checkedUserIDs.has(id);

  const deleteUser = () => {
    setUsers(users.filter((user) => !getIsChecked(user.id)));
  };

  const toggleChecked = (id: number) => {
    setCheckedUserIDs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  return (
    <UsersPage
      users={users}
      handleDelete={deleteUser}
      toggleChecked={toggleChecked}
    />
  );
};
