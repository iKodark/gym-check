import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Box,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { Input } from '@Components';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { UsersContext } from '@Contexts';
import { useForm, FormProvider } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

const Signin = ({ setScreen }) => {
  const navigate = useNavigate();
  const { login } = React.useContext(UsersContext);
  const form = useForm();

  const [show, setShow] = React.useState(false);

  const textRight = useColorModeValue('bg.dark.primary', 'bg.light');

  const handleClick = () => setShow(!show);

  const onSubmit = (data) => {
    const loggedUser = login(data);
    if (!loggedUser) return;

    navigate('/dashboard');
  };

  const toggleScreen = () => setScreen('signup');

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
            Realize seu login!
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

          <Button
            type="submit"
            variant="solid"
            width="100%"
            textTransform="uppercase"
            size="lg"
            color="bg.dark.primary">
            Acessar
          </Button>

          <Link onClick={toggleScreen}>Não possui uma conta? cadastre-se</Link>
        </Box>
      </FormProvider>
    </>
  );
};

Signin.propTypes = {
  setScreen: PropTypes.func
};

export default Signin;
