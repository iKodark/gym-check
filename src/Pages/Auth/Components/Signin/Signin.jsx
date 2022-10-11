import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';

const Signin = ({ setScreen }) => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

  const textRight = useColorModeValue('bg.dark.primary', 'bg.light');

  const handleClick = () => setShow(!show);

  const handleSignin = () => {
    localStorage.setItem('token', true);
    navigate('/dashboard');
  };

  const toggleScreen = () => setScreen('signup');

  return (
    <>
      <Text fontSize="5xl" color={textRight} textAlign="center" fontWeight="medium">
        Realize seu login!
      </Text>

      <Input variant="outline" placeholder="Digite seu e-mail" type="text" size="lg" />

      <InputGroup>
        <Input
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
        variant="solid"
        width="100%"
        textTransform="uppercase"
        size="lg"
        color="bg.dark.primary"
        onClick={handleSignin}>
        Acessar
      </Button>

      <Link onClick={toggleScreen}>Não possui uma conta? cadastre-se</Link>
    </>
  );
};

Signin.propTypes = {
  setScreen: PropTypes.function
};

export default Signin;
