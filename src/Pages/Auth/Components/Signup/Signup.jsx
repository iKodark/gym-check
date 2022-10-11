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

const Signup = ({ setScreen }) => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [showRepeat, setShowRepeat] = React.useState(false);

  const textRight = useColorModeValue('bg.dark.primary', 'bg.light');

  const handleClick = () => setShow(!show);
  const handleClickRepeat = () => setShowRepeat(!showRepeat);

  const handleSignup = () => {
    navigate('/dashboard');
  };

  const toggleScreen = () => setScreen('signin');

  return (
    <>
      <Text fontSize="5xl" color={textRight} textAlign="center" fontWeight="medium">
        Realize seu cadastro!
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

      <InputGroup>
        <Input
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
        variant="solid"
        width="100%"
        textTransform="uppercase"
        size="lg"
        color="bg.dark.primary"
        onClick={handleSignup}>
        Acessar
      </Button>

      <Link onClick={toggleScreen}>Já possui uma conta? acesse</Link>
    </>
  );
};

Signup.propTypes = {
  setScreen: PropTypes.function
};

export default Signup;
