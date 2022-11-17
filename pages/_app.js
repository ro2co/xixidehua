import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {customTheme} from '../styles/theme'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={customTheme}>
        {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
