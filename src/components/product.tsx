interface Props {
  currency?: string;
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
  price: number;
  sku: string;
  stock?: number;
  url: string;
}

export const Product = ({ ...product }: Props) => (
  <div>
    <a href={product.url} className="block">
      <div className="w-full block">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="block">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.price}</span>
      </div>
    </a>
    {product.stock ? (
      <>
        <input
          type="number"
          onChange={(event) =>
            product.handleUpdateQuantityInWishlist?.(
              product.id,
              parseFloat(event.target.value),
            )
          }
          defaultValue={product.handleGetQuantityInWishlist?.(product.id)}
        />
        <button className="block">In winkelwagen</button>
      </>
    ) : (
      <span className="block">Niet op voorraad</span>
    )}
    {product.isWishlistItem ? (
      <button onClick={product.handleRemoveFromWishlist}>
        Verwijder uit wishlist
      </button>
    ) : (
      <button
        onClick={product.handleAddToWishlist}
        disabled={product.isInWishlist}
      >
        {product.isInWishlist ? 'In wishlist' : 'Voeg toe aan wishlist'}
      </button>
    )}
  </div>
);
