import React from 'react';

import {
  Box,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import { Gyms } from '../../Data';

const Dashboard = () => {
  const navigate = useNavigate();
  const bgHeader = useColorModeValue('bg.dark.primary', 'bg.dark.primary');

  const handleGym = (gym) => {
    navigate(`/gym/${gym}/subscribe`);
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" bg={bgHeader} p={3} mb={10}>
        <InputGroup width="30%">
          <Input
            variant="outline"
            placeholder="Pesquise uma academia"
            type="text"
            size="lg"
            // borderColor="primary.500"
            // _hover={{ borderColor: 'primary.600' }}
          />
          <InputRightElement height="100%">
            <IconButton
              variant="ghost"
              aria-label="Pesquisar"
              icon={<SearchIcon color="primary.500" />}
              height="100%"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box display="flex" justifyContent="center" width="100%" mb={10}>
        <SimpleGrid columns={[1, null, 3]} spacing={10} px={10}>
          {Gyms.map((gym) => (
            <Box
              bg="#33393e"
              borderRadius={2}
              maxW="sm"
              overflow="hidden"
              cursor="pointer"
              transitionProperty="transform"
              transitionDuration=".5s"
              _hover={{
                transform: 'scale(1.05)'
              }}
              onClick={() => handleGym(gym.id)}
              key={gym.id}>
              <Box mb={2}>
                <Image width="100%" height="auto" src={gym.image} />
              </Box>
              <Box p={5} color={bgHeader}>
                <Text
                  fontSize="xl"
                  mb={3}
                  textAlign="center"
                  fontWeight="medium"
                  color="primary.500">
                  {gym.title}
                </Text>
                <Text fontSize="md" color="#fff">
                  {gym.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Dashboard;
