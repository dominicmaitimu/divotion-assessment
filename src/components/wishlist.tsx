import { Product } from './product.tsx';
import { ComponentProps } from 'react';

interface Props {
  currentWishlist: ComponentProps<typeof Product>[];
  handleGetQuantityInWishlist: (productId: number) => number;
  handleRemoveFromWishlist: (productId: number) => void;
  handleUpdateQuantityInWishlist: (productId: number, quantity: number) => void;
}

export const Wishlist = ({
  currentWishlist,
  handleGetQuantityInWishlist,
  handleRemoveFromWishlist,
  handleUpdateQuantityInWishlist,
}: Props) => {
  if (!currentWishlist) return <p>Geen producten gevonden</p>;

  return (
    <div>
      <h2>Wishlist</h2>
      <ul className="grid grid-cols-5 gap-4">
        {currentWishlist.map((product) => (
          <li key={product.id}>
            <Product
              {...product}
              isWishlistItem={true}
              handleRemoveFromWishlist={() =>
                handleRemoveFromWishlist(product.id)
              }
              handleUpdateQuantityInWishlist={handleUpdateQuantityInWishlist}
              handleGetQuantityInWishlist={handleGetQuantityInWishlist}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
