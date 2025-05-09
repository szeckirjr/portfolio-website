import { ChakraProvider } from '@chakra-ui/react';
import { PortfolioWebsite } from './components';
import smoothscroll from 'smoothscroll-polyfill';
import { theme } from './theme';

const App = (): JSX.Element => {
  smoothscroll.polyfill();
  return (
    <ChakraProvider theme={theme}>
      <PortfolioWebsite />
    </ChakraProvider>
  );
};

export default App;
