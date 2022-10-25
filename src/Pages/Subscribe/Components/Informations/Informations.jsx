import React from 'react';

import { Box, Flex, Stack } from '@chakra-ui/react';
import { Input } from '@Components';

const Informations = () => {
  return (
    <Box>
      <Flex direction="column" w="100%">
        <Flex direction={{ sm: 'column', md: 'row' }} w="100%" mb="24px">
          <Stack direction="column" spacing="20px" w="100%">
            <Input
              name="name"
              variant="outline"
              placeholder="Digite o seu nome"
              type="text"
              size="lg"
            />

            <Input
              name="email"
              variant="outline"
              placeholder="Digite seu e-mail"
              type="text"
              size="lg"
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Informations;
