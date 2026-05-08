import { Link } from 'react-router-dom';
import { BookOpen, Camera, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream-dark">
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

         
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-gold" />
              <span className="text-2xl font-garamond text-cream font-normal">
                Paperly
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs font-light text-espresso-light">
              Crafting tools for the modern intentionalist. Every item is sourced from heritage workshops
              that honour the slow, deliberate craft of paper making.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:opacity-75 text-gold">
                <Camera size={18} />
              </a>
              <a href="mailto:hello@paperly.co" className="hover:opacity-75 text-gold">
                <Mail size={18} />
              </a>
            </div>
          </div>

         
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-5 font-medium font-jost text-gold">
              Collections
            </h4>
            <ul className="flex flex-col gap-3">
              {['Planners', 'Pens', 'Paper', 'Inks', 'Accessories', 'Stationery'].map(cat => (
                <li key={cat}>
                  <Link
                    to="/products"
                    className="text-sm font-light hover:opacity-70 no-underline text-cream-dark"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-5 font-medium font-jost text-gold">
              Help & Info
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Shipping & Returns', 'Wholesale', 'Contact Us'].map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-light hover:opacity-70 no-underline text-cream-dark"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xl font-garamond text-cream font-normal">
                Join The Atelier Newsletter
              </p>
              <p className="text-sm mt-1 font-light text-espresso-light">
                Early access to new collections and exclusive offers.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2.5 rounded-lg text-sm outline-none flex-1 sm:min-w-[220px] bg-white/[0.07] border border-white/15 text-cream font-jost placeholder:text-cream/40"
              />
              <button className="btn-sage px-5 py-2.5 rounded-lg text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-white/[0.06] px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-espresso-light">
            © 2026 Paperly · The Digital Atelier
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a
                key={l}
                href="#"
                className="text-xs hover:opacity-75 no-underline text-espresso-light"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
