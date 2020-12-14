import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/themes'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
