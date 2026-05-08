import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, BookOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Shop' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-cream-dark bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <BookOpen size={20} className="text-sage" />
          <span className="font-garamond text-[1.6rem] tracking-[0.05em] font-normal text-espresso">
            Paperly
          </span>
        </Link>

        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-widest uppercase no-underline font-jost font-normal transition-colors px-2 py-1 rounded ${
                  isActive
                    ? 'text-sage bg-sage-pale'
                    : 'text-espresso-light hover:text-espresso'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-1 no-underline text-espresso">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium bg-sage font-jost">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-1 bg-transparent border-0 cursor-pointer text-espresso"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden border-t border-cream-dark bg-cream">
          <div className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `no-underline text-sm tracking-widest uppercase font-jost transition-colors ${
                    isActive
                      ? 'text-sage underline underline-offset-4'
                      : 'text-espresso'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-sm tracking-widest uppercase text-sage font-jost"
            >
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;