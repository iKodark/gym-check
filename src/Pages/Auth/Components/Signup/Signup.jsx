import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Link,
  useColorModeValue,
  Box
} from '@chakra-ui/react';
import { Input } from '@Components';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { UsersContext } from '@Contexts';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';

const Signup = ({ setScreen }) => {
  const { createUser } = React.useContext(UsersContext);
  const form = useForm({ resolver: yupResolver(schema) });

  const [show, setShow] = React.useState(false);
  const [showRepeat, setShowRepeat] = React.useState(false);

  const textRight = useColorModeValue('bg.dark.primary', 'bg.light');

  const handleClick = () => setShow(!show);
  const handleClickRepeat = () => setShowRepeat(!showRepeat);

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser({ email, password });

    setScreen('signin');
  };

  const toggleScreen = () => setScreen('signin');

  return (
    <>
      <FormProvider {...form}>
        <Box
          as="form"
          onSubmit={form.handleSubmit(onSubmit)}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="20px"
          width="100%">
          <Text fontSize="5xl" color={textRight} textAlign="center" fontWeight="medium">
            Realize seu cadastro!
          </Text>

          <Input
            name="email"
            variant="outline"
            placeholder="Digite seu e-mail"
            type="text"
            size="lg"
          />

          <InputGroup>
            <Input
              name="password"
              variant="outline"
              placeholder="Digite sua senha"
              type={show ? 'text' : 'password'}
              size="lg"
            />
            <InputRightElement height="100%">
              <IconButton
                onClick={handleClick}
                variant="ghost"
                height="100%"
                aria-label="Toggle show password"
                icon={show ? <ViewIcon /> : <ViewOffIcon />}
              />
            </InputRightElement>
          </InputGroup>

          <InputGroup>
            <Input
              name="passwordConfirmation"
              variant="outline"
              placeholder="Digite sua senha novamente"
              type={showRepeat ? 'text' : 'password'}
              size="lg"
            />
            <InputRightElement height="100%">
              <IconButton
                onClick={handleClickRepeat}
                variant="ghost"
                height="100%"
                aria-label="Toggle show password repeat"
                icon={showRepeat ? <ViewIcon /> : <ViewOffIcon />}
              />
            </InputRightElement>
          </InputGroup>

          <Button
            type="submit"
            variant="solid"
            width="100%"
            textTransform="uppercase"
            size="lg"
            color="bg.dark.primary">
            Acessar
          </Button>
        </Box>
        <Link onClick={toggleScreen}>Já possui uma conta? acesse</Link>
      </FormProvider>
    </>
  );
};

Signup.propTypes = {
  setScreen: PropTypes.func
};

export default Signup;
