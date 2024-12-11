import { useProductContext } from '../context';

export const Categories = () => {
  const { categories, currentCategory, handleFilterProducts } =
    useProductContext();

  if (categories.length === 0) return;

  return (
    <div className="bg-black text-white">
      <nav>
        <ul className="flex px-2 py-1.5">
          <li>
            <button
              onClick={() => handleFilterProducts()}
              className={`h-6 uppercase px-4 hover:underline ${currentCategory === null ? 'underline' : ''}`}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id} className="border-l-2 border-gray-800">
              <button
                onClick={() => handleFilterProducts(category.id)}
                className={`h-6 uppercase px-4 hover:underline ${currentCategory === category.id ? 'underline' : ''}`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
