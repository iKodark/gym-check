import React from 'react';

import { Outlet } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 0
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'primary.500' : 'primary.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'primary.400' : 'primary.400'
          }
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'primary.500' : 'red.500',
          color: props.colorMode === 'dark' ? 'primary.500' : 'red.500',
          _hover: {
            borderColor: props.colorMode === 'dark' ? 'primary.400' : 'red.500',
            color: props.colorMode === 'dark' ? 'primary.400' : 'red.500'
          }
        })
      }
    },
    Input: {
      baseStyle: {
        field: {
          fontWeight: 'medium',
          borderRadius: '0px'
        }
      },
      sizes: {
        lg: {
          field: {
            borderRadius: '0px'
          }
        }
      }
    }
  },
  colors: {
    primary: {
      400: '#e2ff4d',
      500: '#daff1a',
      600: '#c1e600'
    },
    secondary: '#FCFCFC',
    bg: {
      light: '#EDEEEE',
      dark: {
        primary: '#191919',
        secondary: '#666666'
      }
    }
  },
  styles: {
    global: {
      body: (props) => ({
        bg: props.colorMode === 'dark' ? 'bg.light' : 'bg.dark.primary'
      })
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
