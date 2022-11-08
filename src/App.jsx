import React from 'react';

import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { UsersProvider } from '@Providers';
import { useUsers } from '@Hooks';
import theme from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const propUsers = useUsers();

  return (
    <ChakraProvider theme={theme}>
      <UsersProvider {...propUsers}>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Outlet />
      </UsersProvider>
    </ChakraProvider>
  );
}

export default App;
