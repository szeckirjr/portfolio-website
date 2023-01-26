import { ChakraProvider, theme } from '@chakra-ui/react';
import { PortfolioWebsite } from './components';
import smoothscroll from 'smoothscroll-polyfill';
import './style.css';

const App = (): JSX.Element => {
  smoothscroll.polyfill();
  return (
    <ChakraProvider theme={theme}>
      <PortfolioWebsite />
    </ChakraProvider>
  );
};

export default App;
