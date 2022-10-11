import React from 'react';

import { Outlet } from 'react-router-dom';

// import { Box, Avatar } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      {/* <Box display="flex" alignItems="center" justifyContent="flex-end" p={2}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Box> */}
      <Outlet />
    </>
  );
};

export default Layout;
