import { useEffect, useState, useCallback, useMemo } from 'react';
import { useProduct } from './use-product';
import { LOCAL_STORAGE_KEY } from '../config';

export function useWishlist() {
  const { products } = useProduct();

  const getInitialWishlist = (): { id: number; quantity: number }[] => {
    const storedWishlist = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  };

  const [wishlist, setWishlist] =
    useState<{ id: number; quantity: number }[]>(getInitialWishlist);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const currentWishlist = useMemo(
    () =>
      products.filter((product) =>
        wishlist.some((item) => item.id === product.id),
      ),
    [products, wishlist],
  );

  const handleToggleWishlist = useCallback(() => {
    setIsWishlistOpen((prev) => !prev);
  }, []);

  const handleAddToWishlist = useCallback((productId: number) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((item) => item.id === productId);
      if (existingItem) {
        return prevWishlist;
      } else {
        return [...prevWishlist, { id: productId, quantity: 1 }];
      }
    });
  }, []);

  const handleRemoveFromWishlist = useCallback((productId: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId),
    );
  }, []);

  const handleUpdateQuantityInWishlist = useCallback(
    (productId: number, quantity: number) => {
      setWishlist((prevWishlist) => {
        return prevWishlist.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        );
      });
    },
    [wishlist],
  );

  const handleGetQuantityInWishlist = useCallback(
    (productId: number) => {
      const item = wishlist.find((item) => item.id === productId);
      return item?.quantity ?? 0;
    },
    [wishlist],
  );

  const handleIsInWishlist = useCallback(
    (productId: number) => {
      return wishlist.some((item) => item.id === productId);
    },
    [wishlist],
  );

  return {
    currentWishlist,
    handleAddToWishlist,
    handleGetQuantityInWishlist,
    handleIsInWishlist,
    handleRemoveFromWishlist,
    handleToggleWishlist,
    handleUpdateQuantityInWishlist,
    isWishlistOpen,
  };
}
