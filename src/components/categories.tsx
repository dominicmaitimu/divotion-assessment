interface Props {
  categories: { id: number; name: string; slug: string }[];
  handleFilterProducts: (category?: number) => void;
}

export const Categories = ({ categories, handleFilterProducts }: Props) => {
  if (categories.length === 0) return;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleFilterProducts()}>All</button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button onClick={() => handleFilterProducts(category.id)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
