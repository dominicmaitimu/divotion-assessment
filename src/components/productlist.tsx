import { Product } from './product.tsx';
import { useProductContext, useWishlistContext } from '../context.tsx';

export const Productlist = () => {
  const { filteredProducts } = useProductContext();
  const { handleAddToWishlist, handleIsInWishlist } = useWishlistContext();

  if (!filteredProducts) return <p>Geen producten gevonden</p>;

  return (
    <div className="mt-8">
      <ul className="grid grid-cols-4 gap-8">
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
