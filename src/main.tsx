import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './index.css'
import { ThemeProvider } from './commons/style/styled-components';
import GlobalStyle from './commons/style/global-style';

/* Context Providers */
import { ProductsProvider } from './contexts/products-context';
import { CartProvider } from './contexts/cart-context';

import { theme } from './commons/style/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)


