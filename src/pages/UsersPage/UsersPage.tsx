import React, { useContext } from 'react';
import { Button } from '../../components/Button';
import { ButtonTypes } from '../../components/Button/interfaces';
import { UserPageProps } from './interfaces';
import './usersPage.scss';

export const UsersPage: React.FC<UserPageProps> = ({
  users,
  handleDelete,
  toggleChecked,
  changeSetIsAuth,
}) => {
  return (
    <div className="user-page">
      <Button
        btnClass="send sign-out__btn"
        btnText="Sign out"
        btnType={ButtonTypes.button}
        onClick={() => changeSetIsAuth(false)}
      />
      <ul>
        {users.map((user) => {
          return (
            <li className="user-item" key={user.id}>
              <input
                type="checkbox"
                checked={user.checked}
                onChange={() => toggleChecked(user.id)}
              />
              <div>
                {user.id}: {user.name}, user's email: {user.email}
              </div>
              <Button
                btnClass="send delete__btn"
                btnText="Delete"
                btnType={ButtonTypes.button}
                onClick={() => handleDelete(user.checked, user.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
