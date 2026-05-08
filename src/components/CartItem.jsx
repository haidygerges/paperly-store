import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-5 bg-white rounded-xl border border-cream-dark p-5 items-start">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <p className="text-xs tracking-widest uppercase mb-0.5 text-sage font-jost font-medium">
              {item.category}
            </p>
            <h3 className="leading-snug font-garamond text-[1.2rem] text-espresso font-medium">
              {item.name}
            </h3>
            <p className="font-medium text-base mt-1 text-sage font-jost">
              ${item.price}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-transparent border-0 cursor-pointer p-1 opacity-70 hover:opacity-100 flex-shrink-0 text-red-700"
          >
            <Trash2 size={17} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
         
          <div className="flex items-center rounded-lg overflow-hidden border border-cream-dark">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className={`w-9 h-9 flex items-center justify-center bg-transparent border-0 cursor-pointer ${
                item.quantity === 1 ? 'text-red-700' : 'text-espresso-light'
              }`}
            >
              <Minus size={14} />
            </button>
            <span className="w-9 text-center text-sm font-medium font-jost text-espresso">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-9 h-9 flex items-center justify-center bg-transparent border-0 cursor-pointer text-espresso-light"
            >
              <Plus size={14} />
            </button>
          </div>
          <p className="font-medium text-base font-jost text-espresso">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
