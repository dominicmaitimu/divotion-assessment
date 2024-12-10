import { categories, products as initialProducts } from '../__fixtures__';
import { useState } from 'react';

export function useProduct() {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleFilterProducts = (category?: number) => {
    if (!category) {
      setFilteredProducts(initialProducts);
      return;
    }

    setFilteredProducts(
      initialProducts.filter((product) => product.category === category),
    );
  };

  return {
    products: initialProducts,
    categories,
    filteredProducts,
    handleFilterProducts,
  };
}
