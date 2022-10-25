import React from 'react';

import { any, func } from 'prop-types';

import { TabList, TabPanels, TabPanel, Flex, Text, Button } from '@chakra-ui/react';
import { WizardContext } from '../contexts';
import { FormProvider } from 'react-hook-form';

const Steps = ({ children, submit }) => {
  const { backStep, nextStep, step, maxStep, data } = React.useContext(WizardContext);

  const lastStep = step === maxStep - 1;

  const onSubmit = (values) => {
    if (lastStep) {
      submit({ ...values, ...data });
      return;
    }
    nextStep(values);
  };

  return (
    <>
      <TabList display="flex" align="center" alignSelf="center" justifySelf="center">
        {React.Children.map(children, (child, index) => {
          const lastStep = index === children.length - 1;

          return React.cloneElement(child, {
            index: index,
            lastStep: lastStep
          });
        })}
      </TabList>
      <TabPanels mt="24px" maxW={{ md: '90%', lg: '100%' }} mx="auto">
        {React.Children.map(children, (child) => {
          const { handleSubmit = () => {}, description, subDescription, ...form } = child.props;

          return (
            <TabPanel w={{ sm: '330px', md: '700px', lg: '850px' }} mx="auto">
              <Flex mb="40px">
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  textAlign="center"
                  w="80%"
                  mx="auto">
                  <Text fontSize="lg" fontWeight="bold" mb="4px">
                    {description}
                  </Text>
                  <Text fontWeight="normal" fontSize="sm">
                    {subDescription}
                  </Text>
                </Flex>
              </Flex>
              <FormProvider {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {child.props.children && React.cloneElement(child.props.children)}
                  <Flex justifyContent="space-between" flexDirection="row-reverse">
                    <Button
                      type="submit"
                      color="bg.dark.primary"
                      alignSelf="flex-end"
                      mt="24px"
                      w={{ sm: '75px', lg: '100px' }}
                      h="35px">
                      {!lastStep ? 'Próximo' : 'Enviar'}
                    </Button>
                    {!!step && (
                      <Button
                        color="bg.dark.primary"
                        alignSelf="flex-end"
                        mt="24px"
                        w={{ sm: '75px', lg: '100px' }}
                        h="35px"
                        onClick={backStep}>
                        Voltar
                      </Button>
                    )}
                  </Flex>
                </form>
              </FormProvider>
            </TabPanel>
          );
        })}
      </TabPanels>
    </>
  );
};

Steps.propTypes = {
  children: any,
  submit: func
};

export default Steps;
