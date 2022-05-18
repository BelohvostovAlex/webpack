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
          {users.map(({ id, checked, name, email }) => {
            return (
              <tr key={id}>
                <td>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleChecked(id)}
                    className="users-table__checkbox"
                  />
                </td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        btnClass="send users-page__btn"
        btnText="delete"
        btnType={ButtonTypes.button}
        onClick={handleDelete}
      />
    </div>
  );
};
