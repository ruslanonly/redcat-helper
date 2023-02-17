import '../styles/globals.scss'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { Provider as StoreProvider } from 'react-redux'
import localFont from '@next/font/local'

import { ChakraProvider } from "@chakra-ui/react"

import store from 'src/app/redux/store'


const font = localFont({
  src: [
    {
      path: '../media/GT-Eesti-LC-Display-Light-2.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../media/GT-Eesti-LC-Text-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../media/GT-Eesti-LC-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <StoreProvider store={store}>
        <ChakraProvider>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </StoreProvider>
    </>
  )
}

export default App