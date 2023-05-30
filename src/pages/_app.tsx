import { AuthProvider } from "@/context/AuthContext"
import { useProgressBar } from "@/hooks/useProgressBar"
import createEmotionCache from "@/styles/createEmotionCache"
import "@/styles/globals.css"
import theme from "@/styles/theme"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import type { AppProps } from "next/app"
import Head from "next/head"
import { SnackbarProvider } from "notistack"
import { FC } from "react"

const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: FC
  pageProps: any
}

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Custom hook to track page progress with NProgress library
  useProgressBar()

  return (
    <>
      <Head>
        <title>Next js Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
export default MyApp
