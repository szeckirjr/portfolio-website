import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#303030'
      }
    })
  }
});
