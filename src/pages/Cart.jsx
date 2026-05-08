import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-12 bg-cream">
        <ShoppingBag size={48} className="mb-6 text-cream-dark" />
        <h2 className="mb-3 text-center font-garamond text-[2.5rem] text-espresso font-normal">
          Your Collection is Empty
        </h2>
        <p className="font-light mb-10 text-center text-espresso-light">
          Start adding beautiful pieces to your cart.
        </p>
        <Link
          to="/products"
          className="text-white px-8 py-3 rounded-lg text-sm no-underline bg-sage font-jost hover:opacity-90"
        >
          Browse the Collection
        </Link>
      </div>
    );
  }

  const shippingFree = cartTotal >= 60;
  const finalTotal = cartTotal + (shippingFree ? 0 : 10);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="mb-10 font-garamond text-[2.75rem] text-espresso font-normal">
        Your Collection
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
       
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        
        <div className="bg-white rounded-xl border border-cream-dark p-7 lg:sticky top-[90px]">
          <h3 className="mb-6 font-garamond text-[1.5rem] text-espresso font-normal">
            Order Summary
          </h3>

          <div className="flex flex-col gap-3 mb-5">
            <div className="flex justify-between text-sm font-jost text-espresso-light">
              <span>Subtotal</span>
              <span className="text-espresso">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-jost">
              <span className="text-espresso-light">Shipping</span>
              <span className={shippingFree ? 'text-sage' : 'text-espresso'}>
                {shippingFree ? 'Free' : '$10.00'}
              </span>
            </div>
          </div>

          {!shippingFree && (
            <div className="rounded-lg px-3.5 py-2.5 mb-5 text-xs bg-sage-pale text-sage font-jost">
              Add ${(60 - cartTotal).toFixed(2)} more for free shipping
            </div>
          )}

          <div className="border-t border-cream-dark pt-5 mb-6">
            <div className="flex justify-between">
              <span className="font-garamond text-[1.2rem] text-espresso font-medium">
                Total
              </span>
              <span className="font-medium text-xl font-jost text-espresso">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="block w-full text-center text-white py-3.5 rounded-lg text-sm tracking-wide no-underline bg-sage font-jost hover:opacity-90"
          >
            Proceed to Checkout →
          </Link>

          <Link
            to="/products"
            className="block text-center mt-3 text-xs no-underline text-espresso-light font-jost hover:opacity-70"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
