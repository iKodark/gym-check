import React from 'react';

import { any, string } from 'prop-types';

import { Flex, Text, Tabs } from '@chakra-ui/react';

import Wizard from '../';

const Container = ({ children, title, description }) => {
  const properties = Wizard.useWizard();

  console.log(properties);

  return (
    <Wizard.WizardProvider {...properties}>
      <Flex direction="column" minH="100vh" align="center" pt={{ sm: '125px', lg: '75px' }}>
        <Flex direction="column" textAlign="center" mb={{ sm: '25px', md: '45px' }}>
          <Text fontSize={{ sm: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold" mb="8px">
            {title}
          </Text>
          <Text color="gray.400" fontWeight="normal" fontSize={{ sm: 'sm', md: 'lg' }}>
            {description}
          </Text>
        </Flex>
        <Tabs variant="unstyled" mt="24px" display="flex" flexDirection="column">
          {children}
        </Tabs>
      </Flex>
    </Wizard.WizardProvider>
  );
};

Container.propTypes = {
  children: any,
  title: string,
  description: string
};

export default Container;
