import { ChakraProvider } from '@chakra-ui/react';
import { ChakraUIProviderProps } from './type';

const ChakraUIProvider = ({ children }: ChakraUIProviderProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
