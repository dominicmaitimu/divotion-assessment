import { createContext, ReactNode, useContext } from 'react';
import { useProduct, useWishlist } from './hooks';

const ProductContext = createContext<ReturnType<typeof useProduct> | null>(
  null,
);
const WishlistContext = createContext<ReturnType<typeof useWishlist> | null>(
  null,
);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error(
      'useWishlistContext must be used within a WishlistProvider',
    );
  }
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const value = useProduct();

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const value = useWishlist();

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
