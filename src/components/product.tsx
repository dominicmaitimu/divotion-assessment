interface Props {
  description: string;
  handleAddToWishlist?: () => void;
  handleGetQuantityInWishlist?: (productId: number) => number;
  handleRemoveFromWishlist?: () => void;
  handleUpdateQuantityInWishlist?: (
    productId: number,
    quantity: number,
  ) => void;
  id: number;
  image: {
    url: string;
    alt: string;
  };
  isInWishlist?: boolean;
  isWishlistItem?: boolean;
  name: string;
  price: string;
  sku: string;
  stock?: number;
  url: string;
}

export const Product = ({ ...product }: Props) => (
  <div className="relative group">
    <div className="relative w-full block">
      {!product.stock && (
        <span className=" absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-1/2 py-1 text-center font-normal rounded border-black border-2 text-black">
          Out of stock
        </span>
      )}
      <img
        src={product.image.url}
        alt={product.image.alt}
        className={`w-full h-full object-cover object-center ${!product.stock && 'opacity-25'}`}
      />
    </div>
    <div className={`pt-2 block ${!product.stock && 'opacity-25'}`}>
      <h3 className="font-display text-xl">{product.name}</h3>
      <p className="line-clamp-2">{product.description}</p>
      <span className="text-2xl pt-2 pb-4 block text-right">
        {product.price}
      </span>
    </div>
    <div className="flex gap-2">
      {!!product.stock && product.stock > 0 && (
        <>
          {product.isWishlistItem && (
            <input
              type="number"
              onChange={(event) =>
                product.handleUpdateQuantityInWishlist?.(
                  product.id,
                  parseFloat(event.target.value),
                )
              }
              defaultValue={product.handleGetQuantityInWishlist?.(product.id)}
              className="w-full border-gray-200 border-2 h-10"
            />
          )}
        </>
      )}
      {product.isWishlistItem ? (
        <button
          onClick={product.handleRemoveFromWishlist}
          className="bg-black text-white font-normal h-10 w-14"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      ) : (
        <button
          onClick={product.handleAddToWishlist}
          disabled={product.isInWishlist}
          className="absolute top-4 right-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300 cursor-pointer rounded-full w-10 h-10 bg-black text-white pt-2"
        >
          {product.isInWishlist ? (
            <span className="material-symbols-outlined">heart_minus</span>
          ) : (
            <span className="material-symbols-outlined">favorite</span>
          )}
        </button>
      )}
    </div>
  </div>
);
