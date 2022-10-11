import React from 'react';

import PropTypes from 'prop-types';

import { UsersContext } from '../Contexts';

const UsersProvider = ({ children, users }) => (
  <UsersContext.Provider
    value={{
      users
    }}>
    {children}
  </UsersContext.Provider>
);

UsersProvider.propTypes = {
  children: PropTypes.node,
  users: PropTypes.array
};

export default UsersProvider;
