import React from 'react';

import { Flex, Stack, Grid } from '@chakra-ui/react';
import { Input } from '@Components';

const Informations = () => {
  return (
    <Flex direction="column" w="100%">
      <Flex direction={{ sm: 'column', md: 'row' }} w="100%" mb="24px">
        <Stack direction="column" spacing="20px" w="100%">
          <Input
            name="cardNumber"
            variant="outline"
            placeholder="Número do cartão"
            type="text"
            size="lg"
            borderColor="primary.500"
            _hover={{ borderColor: 'primary.600' }}
          />

          <Input
            name="cardName"
            variant="outline"
            placeholder="Nome do titular (como gravado no cartão)"
            type="text"
            size="lg"
            borderColor="primary.500"
            _hover={{ borderColor: 'primary.600' }}
          />
          <Grid templateColumns={{ sm: '1fr 1fr', lg: '1fr 1fr' }} gap="30px">
            <Input
              name="cardExpired"
              variant="outline"
              placeholder="Validade do cartão"
              type="text"
              size="lg"
              borderColor="primary.500"
              _hover={{ borderColor: 'primary.600' }}
            />
            <Input
              name="cardCvv"
              variant="outline"
              placeholder="CVV"
              type="text"
              size="lg"
              borderColor="primary.500"
              _hover={{ borderColor: 'primary.600' }}
            />
          </Grid>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Informations;
