import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '@/config/theme'


export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <Container textAlign="center" fontSize="2xl" p="1em">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
