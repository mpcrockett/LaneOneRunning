import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme/theme.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
