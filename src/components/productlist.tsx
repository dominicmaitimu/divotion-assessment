import { Product } from './product.tsx';
import { ComponentProps } from 'react';

interface Props {
  filteredProducts: ComponentProps<typeof Product>[];
  handleAddToWishlist: (productId: number) => void;
  handleIsInWishlist: (productId: number) => boolean;
}

export const Productlist = ({
  filteredProducts,
  handleAddToWishlist,
  handleIsInWishlist,
}: Props) => {
  if (!filteredProducts) return <p>Geen producten gevonden</p>;

  return (
    <div>
      <h2>Producten</h2>
      <ul className="grid grid-cols-5 gap-4">
        {filteredProducts.map((product) => {
          const isInWishlist = handleIsInWishlist(product.id!);

          return (
            <li key={product.id}>
              <Product
                {...product}
                handleAddToWishlist={() => handleAddToWishlist(product.id!)}
                isInWishlist={isInWishlist}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
