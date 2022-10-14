import React from 'react';

import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import { Input, FormControl, FormErrorMessage } from '@chakra-ui/react';

const InputComponent = ({ name, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name];

  return (
    <>
      <FormControl isInvalid={error}>
        <Input id={name} name={name} placeholder={name} {...register(name)} {...props} />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

InputComponent.propTypes = {
  name: PropTypes.string,
  props: PropTypes.any
};

export default InputComponent;
