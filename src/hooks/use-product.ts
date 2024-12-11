import { categories, products as initialProducts } from '../__fixtures__';
import { useState } from 'react';

export function useProduct() {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);

  const handleFilterProducts = (category?: number) => {
    if (!category) {
      setCurrentCategory(null);
      setFilteredProducts(initialProducts);
      return;
    }

    setCurrentCategory(category);

    setFilteredProducts(
      initialProducts.filter((product) => product.category === category),
    );
  };

  return {
    products: initialProducts,
    categories,
    currentCategory,
    filteredProducts,
    handleFilterProducts,
  };
}
