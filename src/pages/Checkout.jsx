import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { Check, Package, ShoppingBag } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    address: '', city: '', postalCode: '', country: 'Egypt'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Checkout — Paperly';
    return () => { document.title = 'Paperly'; };
  }, []);

  if (cart.length === 0 && !isSubmitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-12 text-center">
        <ShoppingBag size={48} className="mb-6 text-cream-dark" />
        <h2 className="mb-3 font-garamond text-[2rem] text-espresso font-normal">
          Your cart is empty
        </h2>
        <p className="font-light mb-8 text-espresso-light">
          Add some items before checking out.
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

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.address.trim()) newErrors.address = 'Required';
    if (!formData.city.trim()) newErrors.city = 'Required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitted(true);
    clearCart();
    setTimeout(() => navigate('/'), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-sage-pale">
          <Check size={36} className="text-sage" />
        </div>
        <h2 className="mb-3 font-garamond text-[2.5rem] text-espresso font-normal">
          Order Placed Successfully!
        </h2>
        <p className="font-light mb-2 text-espresso-light">
          Thank you for shopping with Paperly.
        </p>
        <p className="text-sm font-light text-espresso-light">
          Redirecting you to home...
        </p>
      </div>
    );
  }

  const shippingFree = cartTotal >= 60;
  const finalTotal = cartTotal + (shippingFree ? 0 : 10);

  const errMsg = (field) => errors[field] ? (
    <p className="text-xs mt-1 text-red-600 font-jost">{errors[field]}</p>
  ) : null;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="mb-10 font-garamond text-[2.75rem] text-espresso font-normal">
        Shipping Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        
        <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label-xs">First Name *</label>
              <input
                type="text" name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`input-field ${errors.firstName ? 'input-error' : ''}`}
              />
              {errMsg('firstName')}
            </div>
            <div>
              <label className="label-xs">Last Name *</label>
              <input
                type="text" name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`input-field ${errors.lastName ? 'input-error' : ''}`}
              />
              {errMsg('lastName')}
            </div>
          </div>

          <div>
            <label className="label-xs">Email Address *</label>
            <input
              type="email" name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'input-error' : ''}`}
            />
            {errMsg('email')}
          </div>

          <div>
            <label className="label-xs">Street Address *</label>
            <input
              type="text" name="address"
              value={formData.address}
              onChange={handleChange}
              className={`input-field ${errors.address ? 'input-error' : ''}`}
            />
            {errMsg('address')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label-xs">City *</label>
              <input
                type="text" name="city"
                value={formData.city}
                onChange={handleChange}
                className={`input-field ${errors.city ? 'input-error' : ''}`}
              />
              {errMsg('city')}
            </div>
            <div>
              <label className="label-xs">Postal Code</label>
              <input
                type="text" name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="label-xs">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="input-field cursor-pointer"
            >
              {['Egypt', 'Saudi Arabia', 'UAE', 'Kuwait', 'Jordan', 'Lebanon', 'Other'].map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 text-white py-4 rounded-xl text-base border-0 cursor-pointer tracking-wide bg-sage font-jost font-normal hover:opacity-90 transition-opacity"
          >
            <Package size={18} />
            Place Order · ${finalTotal.toFixed(2)}
          </button>
        </form>

        
        <div className="lg:col-span-2 bg-white rounded-xl border border-cream-dark p-7 lg:sticky top-[90px]">
          <h3 className="mb-5 pb-4 border-b border-cream-dark font-garamond text-[1.4rem] text-espresso font-normal">
            Your Order
          </h3>

          <div className="flex flex-col gap-3 mb-5">
            {cart.map(item => (
              <div key={item.id} className="flex gap-3 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[52px] h-[52px] object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate font-jost text-espresso font-normal">
                    {item.name}
                  </p>
                  <p className="text-xs text-espresso-light font-jost">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-medium text-sm flex-shrink-0 font-jost text-espresso">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-cream-dark pt-4 flex flex-col gap-2">
            <div className="flex justify-between text-sm font-jost text-espresso-light">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-jost">
              <span className="text-espresso-light">Shipping</span>
              <span className={shippingFree ? 'text-sage' : 'text-espresso'}>
                {shippingFree ? 'Free' : '$10.00'}
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t border-cream-dark mt-1">
              <span className="font-garamond text-[1.1rem] text-espresso font-medium">
                Total
              </span>
              <span className="font-medium text-lg font-jost text-espresso">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
