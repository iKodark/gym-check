import React from 'react';

import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { Signin, Signup } from './Components';

const Auth = () => {
  const [screen, setScreen] = React.useState('signin');

  const bgLeft = useColorModeValue('bg.dark.primary', 'bg.light');
  const textLeft = useColorModeValue('bg.light', 'bg.dark.primary');
  const bgRight = useColorModeValue('bg.light', 'bg.dark.primary');

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          bg={bgLeft}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="100vh"
          width="50%">
          <Image width={300} height="auto" mb={10} src="logo.png" alt="Logo" />
          <Text fontSize="3xl" color={textLeft} textAlign="center" fontWeight="medium">
            Tenha acesso a todas as melhores
            <br /> escolas de artes marciais do{' '}
            <Text color="primary.600" textTransform="uppercase">
              país!
            </Text>
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg={bgRight}
          height="100vh"
          width="50%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="20px"
            width="60%">
            {screen === 'signin' ? (
              <Signin setScreen={setScreen} />
            ) : (
              <Signup setScreen={setScreen} />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Auth;
