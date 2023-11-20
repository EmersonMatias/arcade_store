import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux"
import store from './redux/store.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />

      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
