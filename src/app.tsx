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
    handleUpdateQuantityInWishlist,
  } = useWishlist();

  return (
    <>
      <header>
        <h1>{BRAND_NAME}</h1>
      </header>
      <main>
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
          <hr />
          <Wishlist
            currentWishlist={currentWishlist}
            handleGetQuantityInWishlist={handleGetQuantityInWishlist}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            handleUpdateQuantityInWishlist={handleUpdateQuantityInWishlist}
          />
        </div>
      </main>
    </>
  );
};
