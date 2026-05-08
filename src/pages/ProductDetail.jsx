import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, Check, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (product) document.title = `${product.name} — Paperly`;
    return () => { document.title = 'Paperly'; };
  }, [product]);

  if (!product) {
    return (
      <div className="text-center py-24 px-6">
        <h2 className="font-garamond text-[2rem] text-espresso">Product not found</h2>
        <Link to="/products" className="inline-block mt-4 no-underline text-sage">
          ← Back to collection
        </Link>
      </div>
    );
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      
      <div className="px-6 py-3 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm no-underline text-espresso-light font-jost hover:text-espresso"
          >
            <ArrowLeft size={15} /> Back to Collection
          </Link>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="pill pill-sage absolute top-4 left-4 text-[0.75rem] px-[12px] py-[4px]">
                {product.badge}
              </span>
            )}
          </div>

          
          <div className="pt-0 md:pt-2">
            <p className="text-xs tracking-widest uppercase mb-2 text-sage font-jost font-medium">
              {product.category}
            </p>
            <h1 className="leading-snug mb-4 font-garamond text-[2.5rem] text-espresso font-normal">
              {product.name}
            </h1>

           
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#C4A882" className="text-gold" />
              ))}
              <span className="ml-2 text-sm text-espresso-light font-jost">
                4.9 (24 reviews)
              </span>
            </div>

            <p className="text-3xl font-medium mb-6 text-sage font-jost">
              ${product.price}
            </p>

            <p className="leading-relaxed text-sm font-light mb-10 pb-8 border-b border-cream-dark text-espresso-light">
              {product.description}
            </p>

            
            <button
              onClick={handleAdd}
              className={`w-full flex items-center justify-center gap-2.5 text-white border-0 rounded-xl py-4 text-base cursor-pointer tracking-wide font-jost font-normal transition-colors duration-200 ${
                added ? 'bg-[#3a7d34]' : 'bg-sage hover:bg-sage-light'
              }`}
            >
              {added ? <><Check size={18} /> Added to Cart!</> : <><ShoppingCart size={18} /> Add to Cart</>}
            </button>

            
            <div className="flex flex-wrap gap-2 mt-6">
              {['Free shipping over $60', 'In stock', 'Made to order'].map(t => (
                <span
                  key={t}
                  className="pill pill-sage-pale text-[0.78rem] px-[12px] py-[4px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        
        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="mb-7 font-garamond text-[1.75rem] text-espresso">
              You Might Also Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
