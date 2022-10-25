import React from 'react';

import PropTypes from 'prop-types';

import { UsersContext } from '@Contexts';

const UsersProvider = ({
  children,
  users,
  createUser,
  login,
  loggedUser,
  subscribeUser,
  loggout
}) => (
  <UsersContext.Provider
    value={{
      users,
      createUser,
      login,
      loggedUser,
      subscribeUser,
      loggout
    }}>
    {children}
  </UsersContext.Provider>
);

UsersProvider.propTypes = {
  children: PropTypes.node,
  users: PropTypes.array,
  createUser: PropTypes.func,
  login: PropTypes.func,
  loggedUser: PropTypes.object,
  subscribeUser: PropTypes.func,
  loggout: PropTypes.func
};

export default UsersProvider;
