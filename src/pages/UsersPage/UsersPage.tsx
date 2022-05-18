import React from 'react';
import { Button } from '../../components/Button';
import { ButtonTypes } from '../../components/Button/interfaces';
import { UserPageProps } from './interfaces';
import './usersPage.scss';

export const UsersPage: React.FC<UserPageProps> = ({
  users,
  handleDelete,
  toggleChecked,
}) => {
  return (
    <div className="users-page">
      <table className="users-table">
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={user.checked}
                    onChange={() => toggleChecked(user.id)}
                    className="users-table__checkbox"
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        btnClass="send users-page__btn"
        btnText="delete"
        btnType={ButtonTypes.button}
        onClick={() => handleDelete()}
      />
    </div>
  );
};
