import React from 'react'
import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC<{ Component, pageProps }> = ({ Component, pageProps }: AppProps) => {


  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default App
