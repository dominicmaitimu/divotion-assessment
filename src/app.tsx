import { Categories, Productlist, Wishlist } from './components';
import { BRAND_NAME } from './config.ts';
import { useWishlistContext } from './context.tsx';

export const App = () => {
  const { currentWishlist, handleToggleWishlist, isWishlistOpen } =
    useWishlistContext();

  return (
    <>
      <header className="fixed z-20 top-0 left-0 w-full h-14 px-2.5 text-white bg-black text-center">
        <div className="flex h-14 justify-center items-center">
          <img src="pelle-eclat.svg" alt={BRAND_NAME} className="w-24" />
        </div>
        <div className="absolute top-0 right-2.5 h-14 flex justify-center items-center">
          <button onClick={handleToggleWishlist} className="w-12">
            <div className="relative w-6 h-6">
              {currentWishlist.length > 0 && (
                <span className="absolute top-0 right-full h-6 w-24 text-white rounded-full text-xs content-center text-right pr-1">
                  {currentWishlist.length} x
                </span>
              )}
              <span className="material-symbols-outlined">favorite</span>
            </div>
          </button>
        </div>
      </header>
      <main className="mt-44 max-w-7xl mx-auto">
        <Categories />
        <div>
          <Productlist />
          <Wishlist />
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
