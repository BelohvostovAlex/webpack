import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ButtonTypes } from '../../components/Button/interfaces';

import { FormContainer } from '../../components/Form';
import { pathesEnum } from '../../router/interfaces';

export const Login: React.FC = () => {
  return (
    <>
      <FormContainer />
      <Link to={pathesEnum.USERS}>
        <Button
          btnClass="send"
          btnText="to Users page"
          btnType={ButtonTypes.button}
        />
      </Link>
    </>
  );
};
