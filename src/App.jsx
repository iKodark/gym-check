import React from 'react';

import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { UsersProvider } from '@Providers';
import { useUsers } from '@Hooks';
import theme from './theme';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const propUsers = useUsers();

  return (
    <ChakraProvider theme={theme}>
      <UsersProvider {...propUsers}>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Outlet />
      </UsersProvider>
    </ChakraProvider>
  );
}

export default App;
