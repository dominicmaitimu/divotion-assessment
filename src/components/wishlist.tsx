import { Product } from './product.tsx';
import { ComponentProps } from 'react';

interface Props {
  currentWishlist: ComponentProps<typeof Product>[];
  handleGetQuantityInWishlist: (productId: number) => number;
  handleRemoveFromWishlist: (productId: number) => void;
  handleUpdateQuantityInWishlist: (productId: number, quantity: number) => void;
  isWishlistOpen: boolean;
}

export const Wishlist = ({
  currentWishlist,
  handleGetQuantityInWishlist,
  handleRemoveFromWishlist,
  handleUpdateQuantityInWishlist,
  isWishlistOpen,
}: Props) => {
  if (!currentWishlist) return <p>Geen producten gevonden</p>;

  return (
    <div
      className={`fixed z-20 top-14 right-0 h-full w-80 p-4 ${isWishlistOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-80'} transition-all duration-300 bg-white overflow-y-auto`}
    >
      <button className="mb-4">x sluiten</button>
      <ul className="grid grid-cols-1 gap-4">
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
