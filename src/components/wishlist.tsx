import { Product } from './product.tsx';
import { useWishlistContext } from '../context.tsx';

export const Wishlist = () => {
  const {
    currentWishlist,
    handleGetQuantityInWishlist,
    handleRemoveFromWishlist,
    handleToggleWishlist,
    handleUpdateQuantityInWishlist,
    isWishlistOpen,
  } = useWishlistContext();

  if (!currentWishlist) return <p>Geen producten gevonden</p>;

  return (
    <div
      className={`fixed z-20 top-14 right-0 bottom-0 w-80 p-4 ${isWishlistOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-80'} transition-all duration-300 bg-white overflow-y-auto`}
    >
      <button onClick={handleToggleWishlist} className="mb-4">
        x sluiten
      </button>
      <ul className="grid grid-cols-1 gap-8">
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
