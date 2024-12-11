import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import './index.css';
import { ProductProvider, WishlistProvider } from './context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </ProductProvider>
  </StrictMode>,
);
