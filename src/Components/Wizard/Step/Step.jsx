import React from 'react';

import { string, bool, number, any } from 'prop-types';

import { Tab, Flex, Icon, Text } from '@chakra-ui/react';
import { BsCircleFill } from 'react-icons/bs';
import { WizardContext } from '../contexts';

const Step = ({ title, index, lastStep }) => {
  const { step } = React.useContext(WizardContext);

  const actualStep = step >= index;

  return (
    <Tab _focus="none" w={{ sm: '120px', md: '250px', lg: '300px' }}>
      <Flex
        direction="column"
        justify="center"
        align="center"
        position="relative"
        _before={{
          content: "''",
          width: { sm: '120px', md: '250px', lg: '300px' },
          height: '3px',
          bg: lastStep ? 'transparent' : actualStep ? 'gray.200' : 'gray.300',
          left: { sm: '12px', md: '35px' },
          top: { sm: actualStep ? '6px' : '4px', md: null },
          position: 'absolute',
          bottom: actualStep ? '40px' : '38px',
          zIndex: -1,
          transition: 'all .3s ease'
        }}>
        <Icon
          as={BsCircleFill}
          color={actualStep ? 'primary.500' : 'primary.600'}
          w={actualStep ? '16px' : '12px'}
          h={actualStep ? '16px' : '12px'}
          mb="8px"
        />
        <Text
          color={actualStep ? 'gray.200' : 'gray.300'}
          fontWeight={actualStep ? 'bold' : 'normal'}
          display={{ sm: 'none', md: 'block' }}
          fontSize="sm">
          {title}
        </Text>
      </Flex>
    </Tab>
  );
};

Step.propTypes = {
  title: string,
  index: number,
  lastStep: bool,
  ref: any
};

export default Step;
