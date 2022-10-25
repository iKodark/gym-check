import React from 'react';

import { useNavigate } from 'react-router-dom';

const useUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  const [loggedUser, setLoggedUser] = React.useState(null);

  const createUser = (user) => {
    const userId = (users?.at(-1)?.id || 0) + 1;
    setUsers([...users, { id: userId, ...user, subscribes: [] }]);
  };

  const login = (data) => {
    const userFound = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (!userFound) return false;

    setLoggedUser(userFound);
    return true;
  };

  const loggout = () => {
    setLoggedUser(null);
    navigate('');
  };

  const subscribeUser = (gym, informations) => {
    setUsers(
      users.map((user) =>
        user.email === loggedUser.email
          ? { ...user, subscribes: [...user.subscribes, { gym: gym, informations: informations }] }
          : user
      )
    );
  };

  return {
    users,
    createUser,
    login,
    loggedUser,
    subscribeUser,
    loggout
  };
};

export default useUsers;
