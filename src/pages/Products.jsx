import { useState, useMemo } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const categories = ['All', ...new Set(products.map(p => p.category))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-cream">
      
      <div className="px-6 pt-12 pb-8 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-1 font-garamond text-[2.75rem] text-espresso font-normal">
            The Collection
          </h1>
          <p className="text-sm font-light text-espresso-light">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      
      <div className="sticky top-[65px] px-6 py-3 border-b border-cream-dark z-40 bg-cream">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
         
          <div className="flex gap-2 flex-wrap flex-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pill cursor-pointer border text-[0.82rem] px-[16px] py-[5px] font-jost transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-sage border-sage text-white'
                    : 'bg-white border-cream-dark text-espresso-light hover:border-sage-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          
          <div className="relative w-full sm:w-auto sm:min-w-[220px]">
            <Search
              size={15}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-espresso-light"
            />
            <input
              type="text"
              placeholder="Search collection..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="input-field pl-8 w-full"
            />
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-garamond text-2xl text-espresso-light">
              No items found
            </p>
            <p className="text-sm mt-2 text-espresso-light">
              Try adjusting your search or filter
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
