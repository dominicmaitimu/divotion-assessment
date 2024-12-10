import { Categories, Productlist, Wishlist } from './components';
import { BRAND_NAME } from './config.ts';
import { useProduct, useWishlist } from './hooks';

export const App = () => {
  const { categories, filteredProducts, handleFilterProducts } = useProduct();
  const {
    currentWishlist,
    handleAddToWishlist,
    handleGetQuantityInWishlist,
    handleIsInWishlist,
    handleRemoveFromWishlist,
    handleToggleWishlist,
    handleUpdateQuantityInWishlist,
    isWishlistOpen,
  } = useWishlist();

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-14 px-2.5 text-white bg-black text-center">
        <div className="flex h-14 justify-center items-center">
          <img src="pelle-eclat.svg" alt={BRAND_NAME} />
        </div>
        <div className="absolute top-0 right-2.5 h-14 flex justify-center items-center">
          <button onClick={handleToggleWishlist}>
            Wishlist ({currentWishlist.length})
          </button>
        </div>
      </header>
      <main className="mt-44 max-w-7xl mx-auto">
        <Categories
          categories={categories}
          handleFilterProducts={handleFilterProducts}
        />
        <div>
          <Productlist
            filteredProducts={filteredProducts}
            handleAddToWishlist={handleAddToWishlist}
            handleIsInWishlist={handleIsInWishlist}
          />
          <Wishlist
            isWishlistOpen={isWishlistOpen}
            currentWishlist={currentWishlist}
            handleGetQuantityInWishlist={handleGetQuantityInWishlist}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            handleUpdateQuantityInWishlist={handleUpdateQuantityInWishlist}
          />
        </div>
      </main>
      <footer className="mt-4 mb-32 max-w-7xl mx-auto text-xs">
        <hr className="mb-2 border-black" />
        &copy; {new Date().getFullYear()} - {BRAND_NAME}
      </footer>
      <div
        onClick={handleToggleWishlist}
        className={`fixed z-10 top-14 left-0 w-full h-full bg-black ${isWishlistOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
      />
    </>
  );
};
