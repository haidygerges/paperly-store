import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block no-underline">
      <div className="card">
        
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {product.badge && (
            <span className="pill pill-sage absolute top-3 left-3 text-[0.7rem] px-[10px] py-[3px]">
              {product.badge}
            </span>
          )}
          
          <button
            onClick={handleAdd}
            className={`absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs border-0 cursor-pointer opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 font-jost shadow-md ${
              added ? 'bg-sage text-white' : 'bg-white text-espresso'
            }`}
          >
            {added ? '✓ Added' : <><Plus size={13} /> Add to Cart</>}
          </button>
        </div>

        
        <div className="px-4 pb-5 pt-4">
          <p className="text-xs tracking-widest uppercase mb-1 text-sage font-jost font-medium">
            {product.category}
          </p>
          <h3 className="leading-snug mb-2 font-garamond text-[1.15rem] text-espresso font-medium">
            {product.name}
          </h3>
          <p className="text-base font-medium text-sage font-jost">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
